import React from 'react';
import { Button } from '../../components/ui/Button';
import { Activity } from 'lucide-react';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="notfound-page animate-fade-in">
      <div className="notfound-container">
        <div className="notfound-visual">
          <Activity size={80} className="notfound-icon pulse" />
          <div className="flatline-deco"></div>
        </div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          The surgical lane you requested has been closed, or this page has been temporarily sedated.
        </p>
        <div className="notfound-actions">
          <Button to="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
