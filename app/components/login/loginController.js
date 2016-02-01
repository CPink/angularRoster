(function () {

    'use strict';

    angular
        .module('roster')
        .controller('loginController', loginController);


    function loginController($scope, $state, loginService) {
        var vm = this;

        vm.login = function () {
            return loginService.login(vm.user, function (user) {

                $state.go('main')

            });
        };

        vm.register = function () {
            return loginService.register(vm.user, function (user) {

                $state.go('main')

            });
        };

        // vm.status = 'Register';
        // vm.showReg = function () {
        //     if (vm.status === 'Register') {
        //         vm.status = 'Login';
        //     } else {
        //         vm.status = 'Register';
        //     }
        //     vm.reg = !vm.reg;
        // };
    }
})();