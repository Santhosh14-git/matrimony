import React from 'react';
import Card from '../ui/Card';

const HowItWorks = () => {
  const steps = [
    { title: 'Create Profile', desc: 'Share your details and preferences.' },
    { title: 'Discover Matches', desc: 'Use filters to find compatible matches.' },
    { title: 'Connect Safely', desc: 'Send interests and chat securely.' },
  ];
  return (
    <section id="how-it-works" className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {steps.map((s) => (
          <Card key={s.title} className="text-center">
            <div className="text-4xl">🔶</div>
            <h3 className="text-xl font-semibold mt-3">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
