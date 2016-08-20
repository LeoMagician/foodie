require('rootpath')();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var con = require('./config/index');
var config = require('./config/config.json')
var port = process.env.PORT || 3000;
var Users = require('./models/users')

//connect with mongodb
mongoose.connect(con.getDbConnectionString());

//load all of the static files
app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: false }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

//routes
app.use('/login', require('./server/controllers/login.register.controller/login.controller'));
// app.use('/register', require('./server/controllers/login.register.controller/register.controller'));
app.use('/app', require('./server/controllers/login.register.controller/app.controller'));
// app.use('/api/users', require('./server/controllers/api/users.controller'));

app.use(function(req, res) {
    res.status(404).send('Page not found');
});

app.listen(port);