const router = require('express').Router();
const controller = require('../controller/user_controller');
const newReview = require('../controller/review_controller');
const upload = require('../middleware/upload');
const { authenticate } = require('../middleware/auth');

router.get('/login', controller.login_get);
router.post('/login', controller.login_post);

router.get('/signup', controller.signup_get);
router.post('/signup', controller.signup_post);

router.get('/logout', controller.logout);

router.get('/profile/:username', authenticate, controller.profile);
router.post(
  '/profile',
  authenticate,
  upload.single('image'),
  newReview.newReview_post,
);

module.exports = router;
