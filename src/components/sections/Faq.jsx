import React from 'react';
import Card from '../ui/Card';

const Faq = ({ items }) => {
  return (
    <section id="faq" className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <div className="mt-8 space-y-4">
        {items.map((q, i) => (
          <Card key={i}>
            <p className="font-semibold">{q.question}</p>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Faq;
