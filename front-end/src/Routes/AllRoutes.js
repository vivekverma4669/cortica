import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dishes from '../pages/Dishes';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/dishes" element={<Dishes/>} />
    
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default AllRoutes;
