const express= require('express')
const connection = require('./configs/db');
const cors = require('cors');
const app= express();
app.use(express.json());
app.use(cors());
const Food = require('./models/food.module');
const Cart = require('./models/cart.module');
require('dotenv').config();


const main = async ()=>{
    try {
        await connection;
        console.log('connected succesfully')
    } catch (error) {
        console.log(error);
    }
}
main();


app.get('/', (req,res)=>{
    res.send({'app runing u are on home page now ': req.headers});
});


app.get('/foods', async (req, res) => {
    try {
      const foods = await Food.find();
      res.json(foods);
    }
    catch (error) {
      res.status(500).json({ message: 'Error fetching food items' });
    }
  });
  
 
 
app.post('/cart', async (req, res) => {
  const { itemId, quantity } = req.body;
  try {
    console.log('Request body:', req.body); // Log the request body
    const cartItem = await Cart.findOneAndUpdate(
      { itemId: itemId },
      { $inc: { quantity: quantity } },
      { new: true, upsert: true }
    );
    res.json(cartItem);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Error adding item to cart' });
  }
});

app.get('/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('itemId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items' });
  }
});

app.delete('/cart/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await Cart.findByIdAndDelete(id);
    if (!cartItem) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart' });
  }
});
  
  
const Port=process.env.PORT  || 7000;

app.listen(Port, async ()=>{
console.log(`app runing at port ${Port}`);
})

