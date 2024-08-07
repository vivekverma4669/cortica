import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:7000/cart');
      setCart(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:7000/cart/${itemId}`);
      fetchCart(); // Refresh the cart items
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.itemId.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length !== 0 ? (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.itemId.imageUrl} alt={item.itemId.type} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.itemId.type}</h2>
                <p>{item.itemId.content}</p>
                <p className="cart-item-price">Rs: {item.itemId.price}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
              <div className="cart-item-quantity">
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yrKy00koNPRSg-MAE5rkMmy2HiIAE4U_HQ&s"
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <p>Your cart is empty!</p>
        </div>
      )}

      <div className="cart-total">
        <h2>Total: Rs {getTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default Cart;
