var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

// app.use('/', function(req, res, next) {
//     console.log('Request url: ' + req.url);
//     next();
// });

app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

app.use(function(req, res) {
    res.status(404).send('Page not found');
});

app.listen(port);