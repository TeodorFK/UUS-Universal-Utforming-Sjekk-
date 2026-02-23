const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const createToken = (id) => {
  return jwt.sign({ id }, 'super-secret-key', {
    expiresIn: 3 * 60 * 60,
  });
};

const login_get = (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
  }
};

const login_post = async (req, res) => {
  const { username, passwd } = req.body;
  console.log(username, passwd);
  try {
    const foundUser = await USer.findOne({ username });
    console.log(foundUser._id);
    if (foundUser.passwd === passwd) {
      const token = createToken(foundUser._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 1000 });
      res.status(201).redirect('profile');
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

const signup_get = (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
  }
};

const signup_post = async (req, res) => {
  const { username, passwd } = req.body;
  console.log(username, passwd);
  try {
    const user = await User.create({ username, passwd });
    console.log(user._id);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 1000 });
    res.status(201).redirect('profile');
  } catch (err) {
    console.log(err);
    res.status(400).send('error, user didnt get created');
  }
};

const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout,
};
