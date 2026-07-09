import React from 'react';
import './Card.css';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  clickable = false,
  onClick,
  ...props
}) => {
  const cardClass = `custom-card ${hoverEffect ? 'card-hover' : ''} ${clickable ? 'card-clickable' : ''} ${className}`;

  return (
    <div className={cardClass} onClick={clickable ? onClick : undefined} {...props}>
      {children}
    </div>
  );
};
