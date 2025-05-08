// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoLarge from "./assets/Consult-Park-Logo-Full.png"
import logoSmall from "./assets/Consult-Park-Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logoLarge}/></div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
