import React from 'react';

const FilterBar = ({ filters, onChange }) => {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value });
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 grid md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Location</label>
        <input className="w-full border rounded px-3 py-2" value={filters.location} onChange={set('location')} />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Caste</label>
        <input className="w-full border rounded px-3 py-2" value={filters.caste} onChange={set('caste')} />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Min Age</label>
        <input type="number" className="w-full border rounded px-3 py-2" value={filters.minAge} onChange={set('minAge')} />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Max Age</label>
        <input type="number" className="w-full border rounded px-3 py-2" value={filters.maxAge} onChange={set('maxAge')} />
      </div>
    </div>
  );
};

export default FilterBar;



