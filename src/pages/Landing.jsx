import React from 'react';
import Hero from '../components/sections/Hero';
import FeatureGrid from '../components/sections/FeatureGrid';
import StoriesGrid from '../components/sections/StoriesGrid';
import FamilyTestimonials from '../components/sections/FamilyTestimonials';
import Testimonials from '../components/sections/Testimonials';
import HowItWorks from '../components/sections/HowItWorks';
import CategoryBand from '../components/sections/CategoryBand';
import Faq from '../components/sections/Faq';
import CtaBand from '../components/sections/CtaBand';
import Button from '../components/ui/Button';
import { heroImage, featureImages, testimonials, categories, faqItems } from '../assets';
import { stories, familyTestimonials } from '../assets';

const Landing = () => {
  return (
    <>
      <Hero
        title="Find Your Hindu Life Partner"
        subtitle="A safe and trusted platform for the Hindu community."
        imageSrc={heroImage}
        ctaPrimary={<Button variant="primary" className="rounded-full shadow-lg hover:shadow-xl">Create Profile</Button>}
        ctaSecondary={
          <Button variant="outline" className="rounded-full">
            <span className="inline-flex items-center space-x-2">
              <span>Browse Matches</span>
              <span>→</span>
            </span>
          </Button>
        }
      />
      <FeatureGrid
        items={[
          { icon: 'shield', title: 'Verified Profiles', description: 'Every profile is manually verified for authenticity and safety' },
          { icon: 'lock', title: 'Privacy Protected', description: 'Your data is secure with bank-level encryption' },
          { icon: 'users', title: '50,000+ Matches', description: 'Connect with thousands of genuine profiles' },
          { icon: 'heart', title: 'Family Approved', description: 'Traditional values meet modern matchmaking' },
        ]}
      />
      <StoriesGrid items={stories} />
      <FamilyTestimonials items={familyTestimonials} />
      <Faq items={faqItems} />
      <CtaBand title="Ready to Find Your Perfect Match?" subtitle="Join VivahaMilan today and start your journey towards a blessed marriage." />
    </>
  );
};

export default Landing;
