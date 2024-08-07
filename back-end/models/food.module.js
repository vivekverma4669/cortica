const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
