import React from 'react';
import Card from '../ui/Card';

const Testimonials = ({ items }) => {
  return (
    <section id="testimonials" className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center">Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {items.map((t, idx) => (
          <Card key={idx}>
            <div className="flex items-center mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
            <p className="text-gray-700">{t.quote}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
