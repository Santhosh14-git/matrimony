import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import HoroscopeGrid from '../components/profile/HoroscopeGrid';

const profiles = {
  Ananya: {
    name: 'Ananya', age: 27, location: 'Bengaluru', caste: 'Brahmin',
    photoUrl: '/images/ananya.jpg',
    horoscope: { Rashi: 'Kanya', Nakshatra: 'Hasta', Gothra: 'Kaushika', Dosha: 'None' },
    about: 'Software engineer who loves classical music and travel.'
  },
  Rohan: {
    name: 'Rohan', age: 29, location: 'Mumbai', caste: 'Kshatriya',
    photoUrl: '/images/rohan.jpg',
    horoscope: { Rashi: 'Vrishchika', Nakshatra: 'Anuradha', Gothra: 'Vashishta', Dosha: 'None' },
    about: 'Entrepreneur, foodie, and fitness enthusiast.'
  },
  Priya: {
    name: 'Priya', age: 26, location: 'Chennai', caste: 'Vaishya',
    photoUrl: '/images/priya.jpg',
    horoscope: { Rashi: 'Mesa', Nakshatra: 'Ashwini', Gothra: 'Bharadwaj', Dosha: 'None' },
    about: 'Designer who enjoys art galleries and yoga.'
  }
};

const Profile = () => {
  const { id } = useParams();
  const profile = profiles[id] || Object.values(profiles)[0];
  return (
    <div className="container mx-auto mt-10 max-w-4xl px-[5%]">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <img src={profile.photoUrl} alt={profile.name} className="rounded-xl mx-auto mb-4 w-48 h-48 object-cover" />
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.age} • {profile.location} • {profile.caste}</p>
          <div className="mt-4 space-x-2">
            <Button>Send Interest</Button>
            <Button variant="outline">Message</Button>
          </div>
        </Card>
        <div className="md:col-span-2 space-y-6">
          <Card>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-700">{profile.about}</p>
          </Card>
          <HoroscopeGrid data={profile.horoscope} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
