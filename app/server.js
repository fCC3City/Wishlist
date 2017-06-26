#!/usr/bin/env node

// Load the http module
var express = require('express');

// Configure Express server
var server = express();

server.use('/', express.static(__dirname + '/'));

var port = 8080;
server.listen(port, function () {
  console.log('listening on http://localhost:' + port);
});
