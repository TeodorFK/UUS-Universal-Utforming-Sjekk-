const jwt = require('jsonwebtoken');
const User = require('../model/user_model');

const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    await jwt.verify(token, 'super-secret-key', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } catch (err) {
    console.log(err);
    res.status(401).redirect('login');
  }
};

module.exports = {
  authenticate,
};
