import React from 'react';
import './Loader.css';

export const Loader = ({ type = 'spinner', count = 3 }) => {
  if (type === 'spinner') {
    return (
      <div className="loader-spinner-wrapper" aria-label="Loading content">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  if (type === 'skeleton-card') {
    return (
      <div className="loader-skeleton-grid">
        {Array.from({ length: count }).map((_, index) => (
          <div className="skeleton-card" key={index}>
            <div className="skeleton-thumb pulse"></div>
            <div className="skeleton-line title pulse"></div>
            <div className="skeleton-line text pulse"></div>
            <div className="skeleton-line text short pulse"></div>
            <div className="skeleton-line footer pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'skeleton-table') {
    return (
      <div className="loader-skeleton-table">
        <div className="skeleton-table-header pulse"></div>
        {Array.from({ length: count }).map((_, index) => (
          <div className="skeleton-table-row" key={index}>
            <div className="skeleton-table-cell pulse"></div>
            <div className="skeleton-table-cell pulse"></div>
            <div className="skeleton-table-cell pulse"></div>
            <div className="skeleton-table-cell pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
