import React, { useState } from "react";
import "../style/Nav.css";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return ( 
    <nav>
     
      <Link to="/" className="title">
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrG7kAyZGkydKI5bw5rb8pHm5usBqER1KsLXqGm-zb3_n9JqAO6YOY9qq8LghYtuOmzZQ&usqp=CAU" alt='logo ' style={{height: "80px"}}/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home  </NavLink>
        </li>


        <li>
          <NavLink to="/dishes">Dishes</NavLink>
        </li>


        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        
  
        </ul>


       <span>
       <NavLink to="/cart"> <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" width="60px"></img>
       </NavLink>
       
       </span>
      
    </nav>                   
  );                          
};
 export default Navbar;