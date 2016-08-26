var configValues = require('./config');

module.exports = {
    getDbConnectionString:  function() {
        return 'mongodb://' + configValues.uname +
        ':' + configValues.pwd + 
        '@ds013216.mlab.com:13216/foodie';
    }
}