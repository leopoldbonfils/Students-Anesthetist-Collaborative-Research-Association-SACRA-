import React from 'react';
import './Badge.css';

export const Badge = ({ text, type = 'neutral', className = '' }) => {
  return (
    <span className={`badge badge-${type} ${className}`}>
      {text}
    </span>
  );
};
