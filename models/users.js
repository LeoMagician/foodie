var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    username: String,
    email: {
        type: String,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    password: String
});

var Users = mongoose.model('Users', user);

module.exports = Users;