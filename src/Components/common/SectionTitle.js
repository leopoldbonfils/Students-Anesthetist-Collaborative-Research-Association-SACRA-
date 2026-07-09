import React from 'react';
import './SectionTitle.css';

export const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`section-header-block text-${alignment}`}>
      <h2 className="section-title-text">{title}</h2>
      {subtitle && <p className="section-subtitle-text">{subtitle}</p>}
      <div className={`section-title-bar bar-${alignment}`}></div>
    </div>
  );
};
