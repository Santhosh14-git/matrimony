import React from 'react';
import Card from '../ui/Card';

const FamilyTestimonials = ({ items }) => {
  return (
    <section className="container mx-auto mt-16">
      <div className="text-center">
        <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">Testimonials</span>
        <h2 className="text-3xl font-bold mt-3">What Families Say About Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {items.map((t, i) => (
          <Card key={i}>
            <div className="flex items-center mb-3">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{t.quote}</p>
            <div className="mt-2 text-yellow-500">★★★★★</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FamilyTestimonials;
