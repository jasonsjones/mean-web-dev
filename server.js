process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();

app.listen(process.env.PORT || 3000);

console.log('Server running at ...');