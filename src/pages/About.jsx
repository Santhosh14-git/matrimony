import React from 'react';
import Card from '../components/ui/Card';

const About = () => {
  return (
    <div className="container mx-auto mt-10 max-w-3xl">
      <Card>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">We are a trusted platform dedicated to the Hindu community, helping you find your life partner with care, privacy, and genuine matches.</p>
      </Card>
    </div>
  );
};

export default About;
