import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';
import './Newsletter.css';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <div className="newsletter-card">
      <div className="newsletter-text">
        <h4 className="newsletter-title">Subscribe to our newsletter</h4>
        <p className="newsletter-subtitle">Get the latest anesthesia trials and workshop updates sent straight to your inbox.</p>
      </div>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'success') setStatus('idle');
          }}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="newsletter-input"
          aria-label="Email for newsletter subscription"
        />
        <Button
          type="submit"
          variant="secondary"
          isLoading={status === 'loading'}
          disabled={status === 'success'}
          className="newsletter-button"
        >
          {status === 'success' ? 'Subscribed!' : <><Send size={16} /> Subscribe</>}
        </Button>
      </form>
      {status === 'success' && (
        <p className="newsletter-feedback-success animate-fade-in">
          Thank you! You have successfully subscribed to the SACRA newsletter.
        </p>
      )}
    </div>
  );
};
