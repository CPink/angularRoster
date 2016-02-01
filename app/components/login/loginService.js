/* global Firebase */
(function () {

    'use strict';

    angular
        .module('roster')
        .service('loginService', loginService);


    function loginService(FirebaseUrl, $rootScope) {

        var firebase = FirebaseUrl;

        var rosterLog = new Firebase(firebase);
        
        this.login = function (user, cb) {
		rosterLog.authWithPassword({
			username: user.username,
			email: user.email,    //Email and Password come from our login form
			password: user.password
		}, function (err, authData) {

			if (err) {
				switch (err.code) {
					case "INVALID_EMAIL":
					// handle an invalid email
					case "INVALID_PASSWORD":
					// handle an invalid password
					default:
				}
			} else if (authData) {
				// user authenticated with Firebase
				console.log("Logged In! User ID: " + authData.uid);// + " " + user.username);
				cb(authData); //gives the authenticated user to our callback
			}
		});
	}


        this.register = function (user, cb) {
		rosterLog.createUser({
			email: user.email,
			password: user.password
		}, function (error) {

			if (!error) {
				console.log("User created successfully");
				rosterLog.authWithPassword({
					email: user.email,
					password: user.password
				}, function (err, authData) {
					if (authData) {
						authData.username = user.username;
						authData.timestamp = Date.now();
						rosterLog.child('users').child(authData.uid).set(authData);
						cb(authData);
					} else {
						console.log('something went wrong');
					}
				});
			} else {
				console.log("Error creating user:", error);
				return false;
			}
		});
        }
    }
})();