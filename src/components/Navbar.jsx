import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
