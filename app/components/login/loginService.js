/* global Firebase */
(function () {

    'use strict';

    angular
        .module('roster')
        .service('loginService', loginService);


    function loginService(FirebaseUrl, $rootScope) {
        var vm = this;

        var firebase = FirebaseUrl;

        var rosterLog = new Firebase(firebase);
        vm.register = function (user) {
            rosterLog.createUser({
                email: user.email,
                password: user.password

            }, function (error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            })

            vm.login = function (user, cb) {
                rosterLog.authWithPassword(function(err, authData){
                    if(authData){
                        authData.user = user || {};
                        authData.user.email = user.email;
                        authData.user.password = user.password;
                        
                        user.timestamp = Date.now();
                        
                        rosterLog.child('user').child(authData.user.email).set(authData);
                        rosterLog.child('password').child(authData.user.password).set(authData);  
                        cb(authData);                      
                    }else{
                        console.log('Something went wrong');
                        cb(authData);
                    }
                })
            }
        }
    }
})();