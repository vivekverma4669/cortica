import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const  Dishes = () => {

  const [foods, setFoods] = useState([]); 
  const [loading, setLoading] = useState(false);
  

  const fetchData = async () => {

    setLoading(true);
    try {
      const response = await axios.get(``);
      setFoods(response.data);

      console.log(response.data);
    }
    catch (error) {
      console.error('Error fetching blogs:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[]);

 

  return (
    <div style={{alignItems :'center' , textAlign :'center'}}>
      {/* <div className="post-filter container" style={{ display: 'flex', gap: '10px', margin: 'auto', width: '300px', padding: '20px', fontSize: '20px', justifyContent: 'space-between', border: '2px solid black', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
       
      </div> */}

    <h2> Cutomize your lunch according to your taste</h2>

       <div className="post container">
        {
          !loading? (
            foods.map((food) => (
              <div className="post-box" key={food._id}>
                <img src={food.imageUrl} alt="" className="post-img" />
                <h2 className="category">{food.type}</h2>
                <p className="post-description">
               {food.content}
                </p>
                <h2>Rs : {food.price}</h2>
              </div>
            ))
          ) : (
            <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' alt='load' style={{ width: '250px' }} />
          )
        }

      
      </div> 
    </div>
  );
};

export default Dishes;
