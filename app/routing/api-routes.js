// LOAD DATA
var friendData = require('../data/friends.js')
var path = require('path');

// ROUTING
var API = function(app) {
	this.get = function() { 
	app.get('/api/friends', function(req,res){
		res.json(friendData);
	})
};

	app.post('api/friends', function(req,res){
		console.log(req.body);
	})

/*
	app.post('/api/clear', function(req, res){
		friendData = [];
		console.log(friendData);
	})*/
};

module.exports = API;