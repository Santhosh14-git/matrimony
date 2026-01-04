import React from 'react';

const Card = ({ children, className = '' }) => {
  const base = 'bg-card-background rounded-lg shadow p-6';
  return <div className={`${base} ${className}`}>{children}</div>;
};

export default Card;
