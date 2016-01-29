(function(){
    
    'use strict';
    
    angular
        .module('roster', [
            'ionic',
            'ui.router',
            'firebase'
        ])
        
        .constant('FirebaseUrl', 'https://nflroster.firebaseio.com/')
        
        .config(function($urlRouterProvider, $stateProvider){
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
        })
        
})();