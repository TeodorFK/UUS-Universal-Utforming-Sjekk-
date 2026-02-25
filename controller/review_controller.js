const Review = require('../models/review_model');
const { User, verifyPassword } = require('../models/user_model');

const newReview_post = async (req, res) => {
  try {
    const { title, author, url, image } = req.body;
    const loggedInUser = await User.findById(req.auth.id);
    const review = new Review({
      title,
      author: loggedInUser._id,
      url,
      image: req.file ? req.file.filename : null,
    });
    await review.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  newReview_post,
};
