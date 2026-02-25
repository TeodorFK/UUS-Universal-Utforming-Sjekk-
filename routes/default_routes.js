const router = require('express').Router();
const controller = require('../controller/default_controller');
const { checkUser } = require('../middleware/checkUser');

router.get('/', checkUser, controller.index);
module.exports = router;
