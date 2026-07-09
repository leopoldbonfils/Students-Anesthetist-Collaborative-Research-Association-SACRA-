import React from 'react';
import './PageHeader.css';

export const PageHeader = ({ title, description }) => {
  return (
    <section className="page-header-banner animate-fade-in">
      <div className="container page-header-container">
        <h1 className="page-header-title">{title}</h1>
        {description && <p className="page-header-description">{description}</p>}
        <div className="page-header-deco-dots"></div>
      </div>
    </section>
  );
};
