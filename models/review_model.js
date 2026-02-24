const { Schema, model, mongoose } = require('mongoose');

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Review = model('review', reviewSchema);

module.exports = Review;
