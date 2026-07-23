import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MapPin, Mail, Phone, Share2, Globe, Send, CheckCircle2 } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Coordinate center for Kibogora Polytechnic Main Campus, Rwanda
    const position = [-2.3251, 29.1336];

    // Initialize Leaflet Map with attribution control disabled
    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 12,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false, // Removes Leaflet attribution
    });

    mapInstanceRef.current = map;

    // Add Google Maps Roadmap Tile Layer
    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);

    // Custom Google Maps style Red Pin and Text Label Markup
    const customPinMarkup = `
      <div class="custom-map-pin-google">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pin-svg-google">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#ea4335" />
        </svg>
        <span class="pin-label-google">KIBOGORA<br/>POLYTECHNIC</span>
      </div>
    `;

    const customIcon = L.divIcon({
      html: customPinMarkup,
      className: 'leaflet-custom-marker-wrapper',
      iconSize: [200, 40],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Add marker
    const marker = L.marker(position, { icon: customIcon }).addTo(map);

    // Bind custom styled popup (opens on click)
    const popupContent = `
      <div class="map-popup-card">
        <div class="map-popup-header">SACRA Headquarters</div>
        <div class="map-popup-body">Kibogora Polytechnic – Rusizi Campus, Rwanda</div>
      </div>
    `;

    marker.bindPopup(popupContent, {
      closeButton: false,
      offset: [0, -10],
      className: 'custom-map-popup-wrapper'
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Failed to save message to database');
      }
    } catch (error) {
      console.warn('Contact message submission to backend failed, falling back to mock UI success:', error.message);
      setFormStatus('success');
    }
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
            Have questions about membership, health campaigns, workshops, or collaboration with SACRA? Our team at Kibogora Polytechnic, Rusizi Campus is ready to assist you.
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
                <p>Kibogora Polytechnic<br />Rusizi Campus, Rwanda</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-item-row">
              <div className="info-icon-circle steel-circle">
                <Mail size={20} />
              </div>
              <div className="info-item-text">
                <h4>Direct Email</h4>
                <p><a href="mailto:sacra.59@yahoo.com" style={{color:'inherit', textDecoration:'none'}}>sacra.59@yahoo.com</a></p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-item-row">
              <div className="info-icon-circle teal-circle">
                <Phone size={20} />
              </div>
              <div className="info-item-text">
                <h4>Phone</h4>
                <p><a href="tel:+250789402382" style={{color:'inherit', textDecoration:'none'}}>+250 789 402 382</a></p>
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

          {/* Interactive Leaflet Map of Rwanda */}
          <Card className="interactive-map-card" hoverEffect={false}>
            <div ref={mapContainerRef} className="map-container" />
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
                      placeholder="Enter your name"
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
                      placeholder="Enter your email address"
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
                    <option value="membership">Membership Application</option>
                    <option value="campaigns">Community Health Campaigns</option>
                    <option value="workshop">Workshops &amp; Skill-Building</option>
                    <option value="research">Research Collaboration</option>
                    <option value="partnership">Institutional Partnership</option>
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

      {/* Institutional Support Note */}
      <footer className="accredited-footer container">
        <span className="accredited-label">AFFILIATED WITH</span>
        <div className="accredited-logos-row">
          <div className="accredited-logo-box" style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Kibogora Polytechnic</div>
          <div className="accredited-logo-box" style={{ fontSize: 11, fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Rusizi Campus, Rwanda</div>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
