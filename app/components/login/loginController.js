(function () {

    'use strict';

    angular
        .module('roster')
        .controller('loginController', loginController);


    function loginController($scope, $state, loginService) {
        var vm = this;

        vm.register = function (user) {
            loginService.register(user, function (authData) {
                if (authData) {
                var user = authData;
                return user;
                }
            })
        }
        
        vm.login = function(user){
            loginService.login(vm.register);  
        }
    }
})();