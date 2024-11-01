import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../navbar/home';
import About from '../navbar/about';
import Contact from '../navbar/contact';
import Help from '../navbar/help';
import JavaScript from '../navbar/javascript';
import TypeScript from '../navbar/typescript';
import Navbar from '../navbar/navbar';

const NavRouted: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/typescript" element={<TypeScript />} />
      </Routes>
    </Router>
  );
};

export default NavRouted;
