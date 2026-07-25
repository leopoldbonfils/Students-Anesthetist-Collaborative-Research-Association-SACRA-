import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Newsletter } from '../common/Newsletter';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <Activity className="logo-icon" size={24} />
            <span className="logo-text">SACRA</span>
          </Link>
          <p className="footer-tagline">
            Promoting public health awareness, evidence-based education, and community service among anesthesia students at Kibogora Polytechnic, Rusizi Campus, Rwanda.
          </p>
          <div className="footer-socials">
            <a href="https://x.com/SACRA_Anesthesia" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="https://facebook.com/SACRAResearch" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com/sacra_research" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Navigate */}
        <div className="footer-links-col">
          <h5 className="footer-col-title">Navigate</h5>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Research */}
        <div className="footer-links-col">
          <h5 className="footer-col-title">Research</h5>
          <ul className="footer-links-list">
            <li><Link to="/research">Our Trials</Link></li>
            <li><Link to="/research">Publications</Link></li>
            <li><Link to="/events">Workshops</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-links-col">
          <h5 className="footer-col-title">Contact</h5>
          <ul className="footer-links-list footer-contact-list">
            <li>Kibogora Polytechnic<br />Rusizi Campus, Rwanda</li>
            <li><a href="mailto:sacra.59@yahoo.com">sacra.59@yahoo.com</a></li>
            <li><a href="tel:+250789402382">+250 789 402 382</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter-col">
          <Newsletter />
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} Students Anesthetist Collaborative Research Association (SACRA). All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
