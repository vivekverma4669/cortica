import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../style/hf.css'
import img2 from '../images/img2.jpg'
import { Link } from 'react-router-dom';

const Home = () => {


  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://cortica.onrender.com/foods');
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
    setLoading(false);
  };

  const addToCart = async (itemId) => {
    try {
      const response = await axios.post('https://cortica.onrender.com/cart', { itemId, quantity: 1 });
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
    <>
<section className="home" id="home">
    <div className="home-text container">
        <h2 className="home-title">Cortica</h2>
        <span className="home-subtitle">web solutions</span>
    </div>
</section>



<section className="about container" id="about" >
    <div className="contentBx">
        <h2 className="titleText">Catch up with </h2>
        <p className="title-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos consequuntur voluptate dolorum totam provident ducimus cupiditate dolore doloribus repellat. Saepe ad fugit similique quis quam. Odio suscipit incidunt distinctio.
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis libero pariatur ipsum suscipit voluptates aut, repellendus quos dolor autem, natus laboriosam consectetur maxime cumque, sunt magni optio? Veritatis, ea?
        </p>
        <a href="/" className="btn2">Explore More </a>
    </div>
    <div className="imgBx">
        <img src={img2} alt="" className="fitBg"  style={{width :"100%"}}/>
    </div>
</section>


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


   

   
   {/* <Link to='/dishes'> <h3 style={{textAlign :'center' , backgroundColor :'rgb(77, 228, 255)' , padding :'10px' , borderRadius:'10px' , width:'fit-content' , margin:'auto' , color:'black'}}> move to food page </h3>    </Link>  */}


</>
  );
};

export default Home;
