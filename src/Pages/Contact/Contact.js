import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <div className="contact-page animate-fade-in">
      <PageHeader
        title="Contact Our Team"
        description="Have questions about establishing university chapters, research grants, or simulation events? Drop us a line."
      />

      <section className="container section-padding">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-col">
            <Card className="contact-details-card" hoverEffect={false}>
              <h3 className="contact-col-title">Get In Touch</h3>
              <p className="contact-col-desc">
                If you are looking to collaborate, submit an abstract concept, or host an anesthesia simulation training seminar, feel free to contact us.
              </p>

              <div className="contact-methods-list">
                <div className="contact-method-item">
                  <div className="method-icon"><Mail size={18} /></div>
                  <div className="method-info">
                    <h5>General Inquiries</h5>
                    <a href="mailto:info@sacra-collaborative.org">info@sacra-collaborative.org</a>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon"><Phone size={18} /></div>
                  <div className="method-info">
                    <h5>Telephone Hotline</h5>
                    <span>+1 (555) 342-9902</span>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon"><MapPin size={18} /></div>
                  <div className="method-info">
                    <h5>Central Headquarters</h5>
                    <span>Suite 450, Vanderbilt Medical Center Research Plaza, Nashville, TN</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stylized Google Map Frame Mock */}
            <div className="map-frame-mock animate-scale-in">
              <div className="map-pin-deco">
                <MapPin size={24} className="pin-icon pulse" />
              </div>
              <span className="map-label">Vanderbilt Plaza, TN</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col">
            {status === 'success' ? (
              <Card className="contact-success-card animate-scale-in" hoverEffect={false}>
                <CheckCircle2 className="success-icon" size={56} />
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you, <strong>{name}</strong>. Your message regarding <em>"{subject}"</em> has been dispatched. A member of the SACRA executive board will reach out to you at <strong>{email}</strong> shortly.
                </p>
                <Button onClick={handleReset} variant="outline">
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="contact-form-card" hoverEffect={false}>
                <form onSubmit={handleSubmit} className="contact-submit-form">
                  <h3 className="form-title">Send Us a Message</h3>
                  
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Dr. Alex Carter"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="alex.carter@hospital.org"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="Establishing a new University Chapter"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message Details</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Provide detailed context on your collaborative goals..."
                      disabled={status === 'loading'}
                      className="form-textarea-box"
                    />
                  </div>

                  <div className="form-actions">
                    <Button type="submit" variant="primary" isLoading={status === 'loading'}>
                      <Send size={16} /> Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
