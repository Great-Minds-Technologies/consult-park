import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoLarge from "./assets/Consult-Park-Logo-Full.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoLarge} alt="Consult Park Logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/outsourcing" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Process Outsourcing</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
