var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');

var app = express();

app.engine('html', require('ejs').renderFile); // 추가
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

module.exports = app;
