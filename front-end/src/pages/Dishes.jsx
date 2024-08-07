import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dishes = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:7000/foods');
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
    setLoading(false);
  };

  const addToCart = async (itemId) => {
    try {
      const response = await axios.post('http://localhost:7000/cart', { itemId, quantity: 1 });
      console.log('Item added to cart:', response.data);
      alert('food added into cart')
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ alignItems: 'center', textAlign: 'center' }}>
      <h2>Customize your lunch according to your taste</h2>
      <div className="post container">
        {!loading ? (
          foods.map((food) => (
            <div className="post-box" key={food._id}>
              <img src={food.imageUrl} alt="" className="post-img" />
              <h2 className="category">{food.type}</h2>
              <p className="post-description">{food.content}</p>
              <h2>Rs : {food.price}</h2>
              <button onClick={() => addToCart(food._id)} style={{backgroundColor :'orange', borderRadius :"7px" , padding :'4px',}}>Add</button>
            </div>
          ))
        ) : (
          <img
            src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif"
            alt="load"
            style={{ width: '250px' }}
          />
        )}
      </div>
    </div>
  );
};

export default Dishes;
