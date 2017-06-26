#!/usr/bin/env node
var config = require('app/config');

// Load the http module
var express = require('express');

// Configure Express server
var app = express();

console.log('server process starting');

// Configure where views are, (index.html, etc.)
app.use('/', express.static(__dirname + '/'));

// NOTE: https://github.com/focusaurus/express_code_structure/blob/master/app/server.js
// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    console.log('Unable to listen for connections', error);
    process.exit(10);
  }
  console.log('express is listening on http://' +
    config.express.ip + ':' + config.express.port);
});
