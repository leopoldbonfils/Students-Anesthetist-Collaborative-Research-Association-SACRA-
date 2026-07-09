import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Activity } from 'lucide-react';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Research', path: '/research' },
    { name: 'Events', path: '/events' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="site-logo" aria-label="SACRA Home">
          <Activity className="logo-icon" size={24} />
          <span className="logo-text">SACRA</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="search-toggle-btn" aria-label="Search site">
            <Search size={20} />
          </button>
          <Button to="/membership" variant="primary" className="header-cta-btn">
            Join SACRA
          </Button>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer-overlay ${isOpen ? 'drawer-open' : ''}`} onClick={() => setIsOpen(false)}>
        <nav 
          className="mobile-drawer" 
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          <div className="drawer-header">
            <Link to="/" className="site-logo" onClick={() => setIsOpen(false)}>
              <Activity className="logo-icon" size={24} />
              <span className="logo-text">SACRA</span>
            </Link>
            <button className="drawer-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="drawer-body">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `drawer-item ${isActive ? 'drawer-item-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="drawer-cta-wrapper">
              <Button to="/membership" variant="primary" onClick={() => setIsOpen(false)} className="drawer-cta">
                Join SACRA
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
