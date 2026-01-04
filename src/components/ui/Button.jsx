import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseStyle = 'px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-primary-color text-white hover:bg-opacity-90 focus:ring-primary-color',
    secondary: 'bg-secondary-color text-white hover:bg-opacity-90 focus:ring-secondary-color',
    outline: 'bg-transparent border border-primary-color text-primary-color hover:bg-primary-color hover:text-white focus:ring-primary-color',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;