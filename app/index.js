// Load the express module
var express = require('express');

// Configure express server
var app = express();

// Configure where views are, (index.html, etc.)
app.use('/', express.static(__dirname + '/'));

module.exports = app;
