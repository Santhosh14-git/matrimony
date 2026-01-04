import React from 'react';

const paths = {
  shield: 'M12 2l8 4v6c0 5.25-3.54 10.06-8 11-4.46-.94-8-5.75-8-11V6l8-4z',
  lock: 'M17 11h-1V8a4 4 0 10-8 0v3H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-3a3 3 0 016 0v3H10V8zm3 5a2 2 0 012 2 2 2 0 01-4 0 2 2 0 012-2z',
  users: 'M16 20v-1c0-2.76-4.03-4-8-4s-8 1.24-8 4v1h16zm-8-7a4 4 0 100-8 4 4 0 000 8zm9 0a3 3 0 100-6 3 3 0 000 6z',
  heart: 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.74 4 1.97C11.46 4.74 12.96 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z',
};

const VectorIcon = ({ name, className = '' }) => {
  const d = paths[name] || paths.shield;
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill="currentColor" />
    </svg>
  );
};

export default VectorIcon;
