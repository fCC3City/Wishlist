// Wzięte z https://github.com/focusaurus/express_code_structure/blob/master/app/config.js
var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

// NOTE: Tu powinien być config bazy danych
// https://expressjs.com/en/guide/database-integration.html

// bo kiedyś do tego dojdzie xD
if (PRODUCTION) {
  config.express.ip = '0.0.0.0'
}
