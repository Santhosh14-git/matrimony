import React from 'react';
import Card from '../ui/Card';
import VectorIcon from '../ui/VectorIcon';

const FeatureGrid = ({ items }) => {
  return (
    <section className="container mx-auto mt-16 px-6 md:px-[5%]">
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff6f61] text-white text-sm shadow">
          Why Choose Us
        </span>
        <h2 className="text-3xl font-bold mt-3">Trusted by Thousands of Families</h2>
        <p className="text-gray-600 mt-2">We combine traditional values with modern technology to create a safe and respectful matchmaking experience</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {items.map((item) => (
          <Card
            key={item.title}
            className="text-left bg-white rounded-2xl ring-1 ring-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fff2ed] to-[#efe9ff] flex items-center justify-center mb-4">
              <VectorIcon name={item.icon} className="w-7 h-7 text-[#ff6f61]" />
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
