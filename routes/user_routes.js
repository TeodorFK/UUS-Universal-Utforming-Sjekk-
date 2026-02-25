const router = require('express').Router();
const user_controller = require('../controller/user_controller');
const review_controller = require('../controller/review_controller');
const upload = require('../middleware/upload');
const { authenticate } = require('../middleware/auth');
const { checkUser } = require('../middleware/checkUser');

router.get('/login', checkUser, user_controller.login_get);
router.post('/login', user_controller.login_post);

router.get('/signup', checkUser, user_controller.signup_get);
router.post('/signup', user_controller.signup_post);

router.get('/logout', user_controller.logout);

router.get(
  '/profile/:username',
  authenticate,
  checkUser,
  user_controller.profile,
);

router.post(
  '/profile',
  authenticate,
  upload.single('image'),
  review_controller.newReview_post,
);

module.exports = router;
