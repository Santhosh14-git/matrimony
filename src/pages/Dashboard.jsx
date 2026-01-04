import React from 'react';
import Card from '../components/ui/Card';
import Stepper from '../components/ui/Stepper';
import MediaUploader from '../components/profile/MediaUploader';
import { Link } from 'react-router-dom';
import { personPhotos } from '../assets';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff2ed] via-[#ffeaf3] to-[#f1e9ff]">
      <div className="container mx-auto mt-6 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-8">
        <aside className="lg:block">
          <Card className="p-4 sticky top-24">
            <nav className="space-y-2">
              <Link to="/dashboard" className="block px-3 py-2 rounded-lg bg-gray-100">Dashboard</Link>
              <Link to="/search" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Search Matches</Link>
              <Link to="/plans" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Upgrade Plan</Link>
              <Link to="/profile/you" className="block px-3 py-2 rounded-lg hover:bg-gray-100">My Profile</Link>
              <Link to="/support" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Help & Support</Link>
              <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-red-600">Logout</Link>
            </nav>
          </Card>
        </aside>
        <main>
          <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#ff7a3d] via-[#ff6f61] to-[#7b61ff] text-white flex items-center justify-between">
            <div>
              <div className="text-xl md:text-2xl font-bold">Welcome back, Rahul!</div>
              <div className="opacity-90">Your journey to find the perfect match continues. Stay positive!</div>
            </div>
            <Link to="/search" className="hidden md:inline-block px-4 py-2 rounded-lg bg-white text-primary-color font-semibold">Find New Matches</Link>
          </div>
          <Card className="mt-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Complete Your Profile</div>
              <div className="text-sm px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">75%</div>
            </div>
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-orange-500" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/auth/register" className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm">Personal Info</Link>
              <Link to="/auth/register" className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm">Family Details</Link>
              <Link to="/auth/register" className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm">Add Horoscope</Link>
              <Link to="/auth/register" className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm">Upload Video</Link>
            </div>
          </Card>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <Card className="text-center transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold">142</div>
              <div className="text-gray-500 mt-1">Profile Views</div>
            </Card>
            <Card className="text-center transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold">23</div>
              <div className="text-gray-500 mt-1">Interests Sent</div>
            </Card>
            <Card className="text-center transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold">8</div>
              <div className="text-gray-500 mt-1">Shortlisted</div>
            </Card>
            <Card className="text-center transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold">5</div>
              <div className="text-gray-500 mt-1">Messages</div>
          </Card>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold text-lg">Suggested Matches for You</div>
              <Link to="/search" className="text-primary-color">View All</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Divya Krishnan', age: 26, location: 'Chennai, Tamil Nadu', degree: 'B.Tech in CS', job: 'Software Engineer', match: 95, photo: personPhotos[0] },
                { name: 'Priya Sharma', age: 24, location: 'Bangalore, Karnataka', degree: 'MBA', job: 'Business Analyst', match: 92, photo: personPhotos[1] },
                { name: 'Lakshmi Reddy', age: 27, location: 'Hyderabad, Telangana', degree: 'MBBS', job: 'Doctor', match: 88, photo: personPhotos[2] },
                { name: 'Aishwarya Patel', age: 25, location: 'Mumbai, Maharashtra', degree: 'B.Com', job: 'CA', match: 85, photo: personPhotos[3] },
              ].map((p) => (
                <Card key={p.name} className="p-0 overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative group">
                    <img src={p.photo} alt={p.name} className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-blue-600 text-white">Verified</span>
                    <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-green-600 text-white">{p.match}% Match</span>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{p.name}, {p.age}</div>
                    <div className="text-gray-600 text-sm">{p.location}</div>
                    <div className="text-gray-600 text-sm mt-1">{p.degree}</div>
                    <div className="text-gray-600 text-sm">{p.job}</div>
                    <div className="mt-3 flex justify-between items-center">
                      <button className="px-4 py-2 rounded-lg bg-orange-500 text-white">Send Interest</button>
                      <button className="w-9 h-9 rounded-full border border-gray-300">☆</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Card>
              <div className="font-semibold mb-3">Recent Activity</div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /> Priya Sharma viewed your profile</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" /> New match suggestion available</span>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500" /> Divya Krishnan sent you interest</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="mt-6">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">❤</span>
                <div className="font-semibold">Profile Tip</div>
              </div>
              <div className="text-gray-600 mt-2">Profiles with photos and videos receive 5x more responses. Complete your profile and add a video introduction to stand out!</div>
              <Link to="/auth/register" className="mt-4 inline-block px-4 py-2 rounded-lg bg-orange-500 text-white">Add Video Now</Link>
            </Card>
          </div>
        </main>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
