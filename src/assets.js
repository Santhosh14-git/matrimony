import heroFamily from './images/hero-family.png';
import storyHands from './images/story-hands.jpg';
import storyRose from './images/images.jpg';
import storyCouple from './images/VivahaMilan.jpg';
import person1 from './images/person 1.jpg';
import person2 from './images/person 2.jpg';
import person3 from './images/person 3.jpg';
import person4 from './images/person 4.jpg';
import person5 from './images/person 5.jpg';
import person6 from './images/person 6.jpg';
import person7 from './images/person 7.jpg';

export const heroImage = heroFamily;

export const featureImages = {
  secure: "/images/feature-secure.png",
  verified: "/images/feature-verified.png",
  support: "/images/feature-support.png",
};

export const testimonials = [
  {
    name: "Ananya & Rohan",
    location: "Bengaluru",
    avatar: "/images/testimonial-1.jpg",
    quote: "We met here and everything just clicked. Grateful for the platform.",
  },
  {
    name: "Priya & Arjun",
    location: "Chennai",
    avatar: "/images/testimonial-2.jpg",
    quote: "Safe, simple, and genuine profiles. Highly recommended.",
  },
  {
    name: "Neha & Kunal",
    location: "Mumbai",
    avatar: "/images/testimonial-3.jpg",
    quote: "Found my partner in weeks. The experience was seamless.",
  },
];

export const categories = [
  { name: 'Brahmin', image: '/images/caste-brahmin.png' },
  { name: 'Kshatriya', image: '/images/caste-kshatriya.png' },
  { name: 'Vaishya', image: '/images/caste-vaishya.png' },
  { name: 'Shudra', image: '/images/caste-shudra.png' },
];

export const faqItems = [
  { question: 'Is my data secure?', answer: 'Yes, we use industry-standard security to protect your data.' },
  { question: 'How are profiles verified?', answer: 'We use manual checks and automated systems to verify profiles.' },
  { question: 'Can I change my plan later?', answer: 'You can upgrade or downgrade any time.' },
];

export const stories = [
  { title: 'Priya & Rahul', location: 'Chennai, Tamil Nadu', married: 'Dec 2024', image: storyHands, quote: 'Found our perfect match through VivahaMilan. Forever grateful.' },
  { title: 'Aishwarya & Karthik', location: 'Bangalore, Karnataka', married: 'Nov 2024', image: storyRose, quote: 'A beautiful journey that started here. Thank you for bringing us together.' },
  { title: 'Divya & Arjun', location: 'Coimbatore, Tamil Nadu', married: 'Oct 2024', image: storyCouple, quote: 'Our families are delighted; best decision we ever made.' },
];

export const familyTestimonials = [
  { name: 'Mrs. Lakshmi Ramachandran', role: 'Mother of Bride', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=128&auto=format&fit=crop', quote: 'VivahaMilan helped us find the perfect match for our daughter.' },
  { name: 'Mr. Suresh Kumar', role: 'Father of Groom', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&auto=format&fit=crop', quote: 'Excellent service with verified profiles. We found genuine matches.' },
  { name: 'Mrs. Meena Iyer', role: 'Mother of Groom', avatar: 'https://images.unsplash.com/photo-1510627498534-58d0dff38eab?q=80&w=128&auto=format&fit=crop', quote: 'Safe and respectful platform. Highly recommended to families.' },
];

export const personPhotos = [person1, person2, person3, person4, person5, person6, person7];
