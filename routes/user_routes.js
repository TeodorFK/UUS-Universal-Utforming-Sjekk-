const router = require('express').Router();
const controller = require('../controller/user_controller');

router.get('/login', controller.login_get);

router.get('/signup',controller.signup_get)

module.exports = router;
