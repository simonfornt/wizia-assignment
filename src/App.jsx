import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Customers from './pages/Customers';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/solutions" element={<Solutions />} />
          
        </Routes>
        
     
    </Router>
  );
};

export default App;