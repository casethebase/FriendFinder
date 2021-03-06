// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS SETUP
var app = express();
var PORT = process.env.PORT || 5000;

// GET EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTES
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// SERVER STARTS LISTENING
app.listen(PORT);