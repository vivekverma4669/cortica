const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
