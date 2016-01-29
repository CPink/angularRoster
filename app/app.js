(function () {

    'use strict';

    angular
        .module('roster', [
            'ionic',
            'ui.router',
            'firebase',
            'angularfire'
        ])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
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


        .constant('FirebaseUrl', 'https://nflroster.firebaseio.com/')

        .config(function ($urlRouterProvider, $stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'mainController',
                    controllerAs: 'mainCtrl',
                    templateUrl: 'app/components/main/main.html'
                })

                .state('card', {
                    url: '/card',
                    controller: 'cardController',
                    controllerAs: 'cardCtrl',
                    templateUrl: 'app/components/card/card.html'
                })

                .state('rosters', {
                    url: '/rosters',
                    controller: 'rosterController',
                    controllerAs: 'rosterCtrl',
                    templateUrl: 'app/rosters/rosters.html'
                })

            $urlRouterProvider.otherwise('/');
        })

})();