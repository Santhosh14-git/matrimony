import React from 'react';

const Input = ({ id, label, type = 'text', value, onChange, required = false, className = '' }) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full px-4 py-3 bg-transparent border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none ${className}`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-color bg-white px-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;