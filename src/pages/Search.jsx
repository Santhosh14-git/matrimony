import React, { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import { personPhotos } from '../assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const mockProfiles = [
  { id: 'VIV1001', name: 'Divya Krishnan', age: 26, height_cm: 162, location: 'Chennai, Tamil Nadu', caste: 'Brahmin', education: 'B.Tech in CS', occupation: 'Software Engineer at TCS', verified: true, match: 95, photoUrl: personPhotos[0] },
  { id: 'VIV1002', name: 'Priya Sharma', age: 24, height_cm: 157, location: 'Bangalore, Karnataka', caste: 'Iyer', education: 'MBA', occupation: 'Business Analyst at Infosys', verified: true, match: 92, photoUrl: personPhotos[1] },
  { id: 'VIV1003', name: 'Lakshmi Reddy', age: 27, height_cm: 165, location: 'Hyderabad, Telangana', caste: 'Reddy', education: 'MBBS', occupation: 'Doctor at Apollo Hospital', verified: true, match: 88, photoUrl: personPhotos[2] },
  { id: 'VIV1004', name: 'Aishwarya Patel', age: 25, height_cm: 160, location: 'Mumbai, Maharashtra', caste: 'Patel', education: 'B.Com', occupation: 'Chartered Accountant at EY', verified: true, match: 85, photoUrl: personPhotos[3] },
  { id: 'VIV1005', name: 'Anjali Iyer', age: 23, height_cm: 155, location: 'Coimbatore, Tamil Nadu', caste: 'Iyer', education: 'M.Sc Physics', occupation: 'Teacher at Private School', verified: true, match: 82, photoUrl: personPhotos[4] },
  { id: 'VIV1006', name: 'Meera Kumar', age: 28, height_cm: 168, location: 'Delhi, NCR', caste: 'Nair', education: 'B.Arch', occupation: 'Architect at DLF', verified: true, match: 80, photoUrl: personPhotos[5] },
];

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialQuery = new URLSearchParams(location.search).get('query') || '';
  const [filters, setFilters] = useState({
    query: initialQuery,
    minAge: 18,
    maxAge: 60,
    minHeight: 145,
    maxHeight: 185,
    location: '',
    caste: '',
    education: '',
    occupation: '',
    rasi: '',
  });
  const results = useMemo(() => {
    return mockProfiles.filter((p) => {
      const q = filters.query.trim().toLowerCase();
      const inQuery = !q || p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
      const inAge = p.age >= Number(filters.minAge) && p.age <= Number(filters.maxAge);
      const inHeight = p.height_cm >= Number(filters.minHeight) && p.height_cm <= Number(filters.maxHeight);
      const inLocation = !filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase());
      const inCaste = !filters.caste || p.caste.toLowerCase().includes(filters.caste.toLowerCase());
      const inEdu = !filters.education || p.education.toLowerCase().includes(filters.education.toLowerCase());
      const inOcc = !filters.occupation || p.occupation.toLowerCase().includes(filters.occupation.toLowerCase());
      return inQuery && inAge && inHeight && inLocation && inCaste && inEdu && inOcc;
    });
  }, [filters]);
  const set = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff2ed] via-[#ffeaf3] to-[#f1e9ff]">
      <div className="container mx-auto mt-10 px-[5%]">
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate('/dashboard')} className="text-gray-600 hover:text-gray-900">← Back</button>
        <div className="text-xl font-semibold">Search Matches</div>
        
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
        <aside>
          <Card className="p-6 sticky top-24">
            <div className="font-semibold mb-4">Filters</div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Search by Name/ID</label>
                <input className="w-full border rounded px-3 py-2" value={filters.query} onChange={set('query')} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Age: {filters.minAge} - {filters.maxAge} years</label>
                <div className="flex gap-2">
                  <input type="range" min="18" max="60" value={filters.minAge} onChange={set('minAge')} className="w-1/2" />
                  <input type="range" min="18" max="60" value={filters.maxAge} onChange={set('maxAge')} className="w-1/2" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Height: {filters.minHeight} - {filters.maxHeight} cm</label>
                <div className="flex gap-2">
                  <input type="range" min="140" max="200" value={filters.minHeight} onChange={set('minHeight')} className="w-1/2" />
                  <input type="range" min="140" max="200" value={filters.maxHeight} onChange={set('maxHeight')} className="w-1/2" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Location</label>
                <input className="w-full border rounded px-3 py-2" value={filters.location} onChange={set('location')} placeholder="Select state" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Caste</label>
                <input className="w-full border rounded px-3 py-2" value={filters.caste} onChange={set('caste')} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Education</label>
                <input className="w-full border rounded px-3 py-2" value={filters.education} onChange={set('education')} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Occupation</label>
                <input className="w-full border rounded px-3 py-2" value={filters.occupation} onChange={set('occupation')} />
              </div>
              <button className="w-full mt-2 px-4 py-2 rounded-lg bg-orange-500 text-white">Apply Filters</button>
            </div>
          </Card>
        </aside>
        <main>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((p) => (
              <Card key={p.name} className="p-0 overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative group">
                  <img src={p.photoUrl} alt={p.name} className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" />
                  {p.verified && <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-blue-600 text-white">Verified</span>}
                  <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-green-600 text-white">{p.match}% Match</span>
                </div>
                <div className="p-4">
                  <div className="font-semibold">{p.name}, {p.age}</div>
                  <div className="text-gray-600 text-sm">{p.location}</div>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>{p.education}</li>
                    <li>{p.occupation}</li>
                  </ul>
                  <div className="mt-3 flex justify-between items-center">
                    <button className="px-4 py-2 rounded-lg bg-orange-500 text-white">Send Interest</button>
                    <button className="w-9 h-9 rounded-full border border-gray-300">☆</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
      </div>
    </div>
  );
};

export default Search;
