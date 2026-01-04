import React from 'react';
import Button from '../ui/Button';

const CtaBand = ({ title, subtitle }) => {
  return (
    <section id="cta" className="bg-gradient-to-r from-primary-color to-secondary-color text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg mt-2">{subtitle}</p>
        <div className="mt-6">
          <Button variant="secondary">Create Profile</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
