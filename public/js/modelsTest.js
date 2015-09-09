(function() {
	"use strict";

	var app = angular.module("modelsTest", []);

	app.controller("UsersController", function() {
		this.newUser = {};
		this.users = [];

		this.addUser = function() {
			this.users.push(this.newUser);
			this.newUser = {};
		};
	});

}) ();