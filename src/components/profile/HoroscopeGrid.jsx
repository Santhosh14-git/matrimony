import React from 'react';
import Card from '../ui/Card';

const HoroscopeGrid = ({ data }) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">Horoscope Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <p className="font-semibold text-gray-600">{key}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HoroscopeGrid;