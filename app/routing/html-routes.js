// DEPENDENCIES
var path = require('path');

// ROUTES

module.exports = function(app) {
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
	// DEFAULT TO HOME
	app.use('/', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/home.html'))
	});
}