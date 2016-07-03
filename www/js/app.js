// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// include ngCordova
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
// $cordovaGeolocation
// $ionicLoading
.controller('MapController', ['$scope', '$cordovaGeolocation', '$ionicLoading', function($scope, $cordovaGeolocation, $ionicLoading) {


    $scope.locate = function() {
        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: true
        };

        // loading show
        $ionicLoading.show();

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {

                // loading hide
                $ionicLoading.hide();

                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                alert("Got position: " + lat + ", " + lng);


                // var myLocation = new google.maps.LatLng(lat, lng);

                // var map = new google.maps.Map(document.getElementById('map'), {
                //     mapTypeId: google.maps.MapTypeId.ROADMAP,
                //     center: myLocation,
                //     zoom: 15
                // });

                // var marker = new google.maps.Marker({
                //     map: map,
                //     position: myLocation
                // });

            }, function(error) {

                // loading hide
                $ionicLoading.hide();

                if (error.code == PositionError.PERMISSION_DENIED) {
                    alert("Permission denied. check setting");
                } else if (error.code == PositionError.POSITION_UNAVAILABLE) {
                    alert("Cannot get position. May be problem with network or can't get a satellite fix.");
                } else if (error.code == PositionError.TIMEOUT) {
                    alert("Geolocation is timed out.");
                } else {
                    alert(error.message);
                }
            });
    }

}])
