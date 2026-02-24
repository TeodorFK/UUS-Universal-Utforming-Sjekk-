const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    jwt.verify(token, 'super-secret-key', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log("decoded",decodedToken);
        next();
      }
    });
  } catch (err) {
    console.log(err);
    res.redirect('/login');
  }
};

module.exports = {
  authenticate,
};
