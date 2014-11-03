process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();
var port = (process.env.PORT || 3000);
app.listen(port);

console.log('Server running on port ' + port);