import React from 'react'
import Navbar from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App