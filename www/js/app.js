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

        

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {

                // get position.coords.latitude
                // get position.coords.longitude
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                // log in alert
                
                
                
            }, function(err) {

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
