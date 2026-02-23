const login_get = (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
  }
};
const signup_get = (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login_get,
  signup_get,
};
