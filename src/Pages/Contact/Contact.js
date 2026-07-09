import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MapPin, Mail, Phone, Share2, Globe, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setFormStatus('idle');
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Clean White Contact Page Header (Aligned with Mockup) */}
      <section className="contact-header-section">
        <div className="container contact-header-container">
          <h1 className="contact-header-title">Connect with Our Research Community</h1>
          <p className="contact-header-subtitle">
            Have questions about anesthesia research or clinical collaboration? Our team at Kibogora Polytechnic is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="container contact-main-grid">
        {/* Left Column: Contact Details & Map */}
        <div className="contact-details-column">
          <div className="info-items-list">
            {/* Address */}
            <div className="info-item-row">
              <div className="info-icon-circle blue-circle">
                <MapPin size={20} />
              </div>
              <div className="info-item-text">
                <h4>Office Address</h4>
                <p>Kibogora Polytechnic, Rusizi Campus<br />Western Province, Rwanda</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-item-row">
              <div className="info-icon-circle steel-circle">
                <Mail size={20} />
              </div>
              <div className="info-item-text">
                <h4>Direct Email</h4>
                <p>info@sacra-research.org</p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-item-row">
              <div className="info-icon-circle teal-circle">
                <Phone size={20} />
              </div>
              <div className="info-item-text">
                <h4>Phone</h4>
                <p>+250 788 000 000</p>
              </div>
            </div>
          </div>

          {/* Social Share Row */}
          <div className="follow-research-block">
            <h5>FOLLOW OUR RESEARCH</h5>
            <div className="follow-icons-row">
              <a href="#share" className="follow-icon-btn" aria-label="Share Research"><Share2 size={16} /></a>
              <a href="https://sacra-research.org" className="follow-icon-btn" aria-label="Web Portal"><Globe size={16} /></a>
            </div>
          </div>

          {/* Stylized Visual Map Component of Rwanda/Rusizi */}
          <Card className="stylized-map-card" hoverEffect={false}>
            <div className="map-lake-bg">
              {/* Draw Lake Kivu and Rusizi Campus indicator using pure SVGs */}
              <svg viewBox="0 0 300 200" width="100%" height="100%" className="map-vector-graphic">
                {/* Land masses */}
                <rect x="0" y="0" width="300" height="200" fill="#e2e8f0" />
                {/* Lake Kivu shape */}
                <path d="M10 30 C 50 10, 80 40, 60 90 C 40 140, 70 170, 30 190 L 0 200 L 0 0 Z" fill="#93c5fd" />
                {/* Boundary line */}
                <path d="M60 90 Q 90 120, 70 170" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                {/* Rusizi Campus Indicator */}
                <circle cx="50" cy="140" r="10" fill="rgba(0, 92, 191, 0.2)" className="pulse-circle" />
                <circle cx="50" cy="140" r="4" fill="#005cbf" />
                {/* Text Labels */}
                <text x="70" y="145" fill="#1e293b" fontSize="10" fontWeight="700" fontFamily="sans-serif">RUSIZI CAMPUS</text>
                <text x="15" y="100" fill="#2563eb" fontSize="10" fontWeight="600" fontFamily="sans-serif" transform="rotate(-75, 15, 100)">LAKE KIVU</text>
                <text x="140" y="80" fill="#64748b" fontSize="11" fontWeight="600" fontFamily="sans-serif">WESTERN PROVINCE</text>
              </svg>
              <div className="map-badge-overlay">MAP LOCATION | KIBOGORA POLYTECHNIC</div>
            </div>
          </Card>
        </div>

        {/* Right Column: Inquiry Form Card */}
        <div className="contact-form-column">
          {formStatus === 'success' ? (
            <Card className="form-success-card animate-scale-in" hoverEffect={false}>
              <CheckCircle2 className="success-icon animate-pulse" size={60} fill="none" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We have logged your request and our clinical committee will respond shortly.</p>
              <Button onClick={handleReset} variant="outline">Send Another Inquiry</Button>
            </Card>
          ) : (
            <Card className="contact-form-card" hoverEffect={false}>
              <h3>Send an Inquiry</h3>
              <form onSubmit={handleFormSubmit} className="inquiry-form-fields">
                <div className="form-row-grid">
                  <div className="form-input-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Dr. Jane Doe"
                      disabled={formStatus === 'loading'}
                    />
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="jane@example.com"
                      disabled={formStatus === 'loading'}
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-subject">Inquiry Subject</label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    disabled={formStatus === 'loading'}
                    className="select-field"
                  >
                    <option value="">Select a topic</option>
                    <option value="research">Research Collaboration</option>
                    <option value="membership">Membership Activation</option>
                    <option value="workshop">Sim-Lab Workshops</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="How can we help you?"
                    disabled={formStatus === 'loading'}
                    rows={6}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-send-message" disabled={formStatus === 'loading'}>
                    <span>{formStatus === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} className="send-icon" />
                  </button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Accredited By Footer Row */}
      <footer className="accredited-footer container">
        <span className="accredited-label">ACCREDITED BY</span>
        <div className="accredited-logos-row">
          <div className="accredited-logo-box"></div>
          <div className="accredited-logo-box"></div>
          <div className="accredited-logo-box"></div>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
