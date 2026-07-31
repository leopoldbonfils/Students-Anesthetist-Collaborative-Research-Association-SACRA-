import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Newsletter } from '../common/Newsletter';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* 3-layer zigzag: blue 5px → white 5px → navy 5px = 15px total */}
      <svg
        className="footer-zigzag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 15"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* BLUE — 5px (y 0→5), fills 5→15 */}
        <polygon
          points="0,15 0,5 10,0 20,5 30,0 40,5 50,0 60,5 70,0 80,5 90,0 100,5 110,0 120,5 130,0 140,5 150,0 160,5 170,0 180,5 190,0 200,5 210,0 220,5 230,0 240,5 250,0 260,5 270,0 280,5 290,0 300,5 310,0 320,5 330,0 340,5 350,0 360,5 370,0 380,5 390,0 400,5 410,0 420,5 430,0 440,5 450,0 460,5 470,0 480,5 490,0 500,5 510,0 520,5 530,0 540,5 550,0 560,5 570,0 580,5 590,0 600,5 610,0 620,5 630,0 640,5 650,0 660,5 670,0 680,5 690,0 700,5 710,0 720,5 730,0 740,5 750,0 760,5 770,0 780,5 790,0 800,5 810,0 820,5 830,0 840,5 850,0 860,5 870,0 880,5 890,0 900,5 910,0 920,5 930,0 940,5 950,0 960,5 970,0 980,5 990,0 1000,5 1010,0 1020,5 1030,0 1040,5 1050,0 1060,5 1070,0 1080,5 1090,0 1100,5 1110,0 1120,5 1130,0 1140,5 1150,0 1160,5 1170,0 1180,5 1190,0 1200,5 1200,15"
          fill="#002b80"
        />
        {/* WHITE — 5px (y 5→10), fills 10→15 */}
        <polygon
          points="0,15 0,10 10,5 20,10 30,5 40,10 50,5 60,10 70,5 80,10 90,5 100,10 110,5 120,10 130,5 140,10 150,5 160,10 170,5 180,10 190,5 200,10 210,5 220,10 230,5 240,10 250,5 260,10 270,5 280,10 290,5 300,10 310,5 320,10 330,5 340,10 350,5 360,10 370,5 380,10 390,5 400,10 410,5 420,10 430,5 440,10 450,5 460,10 470,5 480,10 490,5 500,10 510,5 520,10 530,5 540,10 550,5 560,10 570,5 580,10 590,5 600,10 610,5 620,10 630,5 640,10 650,5 660,10 670,5 680,10 690,5 700,10 710,5 720,10 730,5 740,10 750,5 760,10 770,5 780,10 790,5 800,10 810,5 820,10 830,5 840,10 850,5 860,10 870,5 880,10 890,5 900,10 910,5 920,10 930,5 940,10 950,5 960,10 970,5 980,10 990,5 1000,10 1010,5 1020,10 1030,5 1040,10 1050,5 1060,10 1070,5 1080,10 1090,5 1100,10 1110,5 1120,10 1130,5 1140,10 1150,5 1160,10 1170,5 1180,10 1190,5 1200,10 1200,15"
          fill="white"
        />
        {/* NAVY — 5px (y 10→15), merges into footer */}
        <polygon
          points="0,15 10,10 20,15 30,10 40,15 50,10 60,15 70,10 80,15 90,10 100,15 110,10 120,15 130,10 140,15 150,10 160,15 170,10 180,15 190,10 200,15 210,10 220,15 230,10 240,15 250,10 260,15 270,10 280,15 290,10 300,15 310,10 320,15 330,10 340,15 350,10 360,15 370,10 380,15 390,10 400,15 410,10 420,15 430,10 440,15 450,10 460,15 470,10 480,15 490,10 500,15 510,10 520,15 530,10 540,15 550,10 560,15 570,10 580,15 590,10 600,15 610,10 620,15 630,10 640,15 650,10 660,15 670,10 680,15 690,10 700,15 710,10 720,15 730,10 740,15 750,10 760,15 770,10 780,15 790,10 800,15 810,10 820,15 830,10 840,15 850,10 860,15 870,10 880,15 890,10 900,15 910,10 920,15 930,10 940,15 950,10 960,15 970,10 980,15 990,10 1000,15 1010,10 1020,15 1030,10 1040,15 1050,10 1060,15 1070,10 1080,15 1090,10 1100,15 1110,10 1120,15 1130,10 1140,15 1150,10 1160,15 1170,10 1180,15 1190,10 1200,15"
          fill="#002b80"
        />
      </svg>

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
            <li>
              <span className="footer-contact-item">
                <svg className="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Kibogora Polytechnic<br />Rusizi Campus, Rwanda</span>
              </span>
            </li>
            <li>
              <span className="footer-contact-item">
                <svg className="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:sacra.59@yahoo.com">sacra.59@yahoo.com</a>
              </span>
            </li>
            <li>
              <span className="footer-contact-item">
                <svg className="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+250789402382">+250 789 402 382</a>
              </span>
            </li>
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
