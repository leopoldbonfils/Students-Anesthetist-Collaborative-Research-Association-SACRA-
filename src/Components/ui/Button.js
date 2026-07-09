import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}) => {
  const buttonClass = `btn btn-${variant} ${isLoading ? 'btn-loading' : ''} ${className}`;

  const content = (
    <>
      {isLoading && <span className="btn-spinner"></span>}
      <span className="btn-content">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
