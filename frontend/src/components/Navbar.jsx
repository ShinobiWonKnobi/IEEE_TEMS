import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/tems.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="IEEE TEMS Logo" />
        </Link>
        <div className="brand-name">
          <span className="brandName">IEEE TEMS</span>
          <span className="fullForm">Technology & Engineering Management Society</span>
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
          Home
        </NavLink>
        <NavLink to="/events" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
          Events
        </NavLink>
        <NavLink to="/team" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
          Our Team
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;