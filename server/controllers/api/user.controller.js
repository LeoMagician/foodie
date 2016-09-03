var config = require('config/config.json');
var express = require('express');
var router = express.Router();
var userService = require('../../services/user/user.service');

// routes


// module.exports = function(app) {
router.post('/authenticate', authenticateUser);
// router.post('/register', registerUser);
// router.get('/current', getCurrentUser);
// router.put('/:_id', updateUser);
// router.delete('/:_id', deleteUser);

module.exports = router;

function authenticateUser(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function(token) {
            if (token) {
                // authentication successful
                res.send({ token: token });
            } else {
                // authentication failed
                res.sendStatus(401);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}
// }