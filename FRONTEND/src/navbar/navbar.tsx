import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
        <li>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/about">About</Link></ul>
          <ul><Link to="/contact">Contact</Link></ul>
          <ul><Link to="/help">Help</Link></ul>
        </li>
        <li>
          <ul><Link to="/javascript">JavaScript</Link></ul>
          <ul><Link to="/typescript">TypeScript</Link></ul>
        </li>
    </nav>
  );
};

export default Navbar;