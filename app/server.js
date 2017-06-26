#!/usr/bin/env node

// Load the http module
var express = require('express');

// Configure Express server
var server = express();

console.log('server process starting');

// Configure where views are, (index.html, etc.)
server.use('/', express.static(__dirname + '/'));

// TODO: This should go to a config file
var port = 8080;
server.listen(port, function () {
  console.log('listening on http://localhost:' + port);
});
