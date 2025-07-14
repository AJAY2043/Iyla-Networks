import './Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Iyla <span>Networks</span></Link>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/aboutus" onClick={closeMenu}>AboutUs</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/ourteam" onClick={closeMenu}>OurTeam</Link>
          <Link to="/contactus" onClick={closeMenu}>ContactUS</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
