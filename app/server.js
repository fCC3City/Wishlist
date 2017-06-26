#!/usr/bin/env node
// TODO: znaleźć lepszy sposób na te ścieżki?
// var config = require('app/config')
var app = require('./index');
var config = require('./config');



console.log('server process starting');

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
