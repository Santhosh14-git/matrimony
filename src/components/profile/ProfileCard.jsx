import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  return (
    <Card className="text-center">
      <img
        src={profile.photoUrl}
        alt={profile.name}
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{profile.name}</h3>
      <p className="text-gray-500">{profile.age}, {profile.location}</p>
      <p className="text-gray-600 mt-2">{profile.caste}</p>
      <div className="mt-4 flex justify-center space-x-2">
        <Button>Send Interest</Button>
        <Link
          to={`/profile/${profile.name}`}
          className="px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent border border-primary-color text-primary-color hover:bg-primary-color hover:text-white focus:ring-primary-color"
        >
          View Profile
        </Link>
      </div>
    </Card>
  );
};

export default ProfileCard;
