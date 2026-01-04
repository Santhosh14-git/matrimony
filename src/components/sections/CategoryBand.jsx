import React from 'react';
import Card from '../ui/Card';

const CategoryBand = ({ categories }) => {
  return (
    <section id="categories" className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center">Categories</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categories.map((c) => (
          <Card key={c.name} className="text-center">
            <img src={c.image} alt={c.name} className="w-16 h-16 mx-auto mb-3" />
            <p className="text-lg font-semibold">{c.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryBand;
