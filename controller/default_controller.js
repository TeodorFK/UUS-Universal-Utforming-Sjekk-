const Review = require('../models/review_model');

const index = async (req, res) => {
  try {
    const reviews = await Review.find().populate('author');
    res.render('index', { reviews });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
