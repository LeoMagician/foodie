var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../../config/config.json');

// module.exports = function(app) {
router.get('/', function(req, res) {
    // log user out
    delete req.session.token;

    // move success message into local variable so it only appears once (single read)
    var viewData = { success: req.session.success };
    delete req.session.success;

    // res.render('index', viewData);
    res.sendFile('../../../app/index.html');
});

router.post('/login', function(req, res) {
    // authenticate using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/authenticate',
        form: req.body,
        json: true
    }, function(error, response, body) {
        if (error) {

            return;
            // return res.render('login', { error: 'An error occurred' });

        }

        if (!body || !body.token) {

            return;
            // return res.render('login', { error: 'Username or password is incorrect', username: req.body.username });
        }

        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;
        res.send(req.session.token);
        // serve angular app files from the '/app' route
        router.use('/', express.static('app'));
        // redirect to returnUrl
        // var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';

        // res.redirect(returnUrl);
    });
});
// }
module.exports = router;