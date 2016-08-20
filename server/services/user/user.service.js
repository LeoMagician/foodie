var config = require('config/config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var con = require('./config/index');
var mongoose = require('mongoose');
var Users = require('./models/users')

//connect with mongodb
mongoose.connect(con.getDbConnectionString());


var service = {};
 
service.authenticate = authenticate;
// service.getById = getById;
// service.create = create;
// service.update = update;
// service.delete = _delete;
 
module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();
 
    Users.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err);
 
        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve(jwt.sign({ sub: user._id }, config.secret));
        } else {
            // authentication failed
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}