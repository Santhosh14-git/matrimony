import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff2ed] via-[#ffeaf3] to-[#f1e9ff]">
      <div className="container mx-auto px-[5%]">
        <div className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900">← Back</button>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6f61] to-[#ff9a8d] flex items-center justify-center text-white">❤</span>
              <span className="text-xl font-semibold">Support Center</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl mt-6 p-8 bg-gradient-to-r from-[#ff7a3d] via-[#ff6f61] to-[#7b61ff] text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">How Can We Help You?</h1>
          <p className="opacity-90 mt-2">Get quick answers to your questions or contact our support team</p>
          <div className="mt-4 max-w-2xl mx-auto">
            <input className="w-full px-4 py-3 rounded-full bg-white text-gray-700" placeholder="Search for help articles..." />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-xl font-semibold mb-2">Contact Us</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="font-semibold">Phone Support</div>
                  <div className="text-gray-600 mt-1">Mon–Sat, 9 AM – 6 PM IST</div>
                  <div className="text-orange-600 mt-2">+91 98765 43210</div>
                </Card>
                <Card className="p-4">
                  <div className="font-semibold">Email Support</div>
                  <div className="text-gray-600 mt-1">We respond within 24 hours</div>
                  <div className="text-orange-600 mt-2">support@vivahamilan.com</div>
                </Card>
                <Card className="p-4 sm:col-span-2">
                  <div className="font-semibold">Office Address</div>
                  <div className="text-gray-600 mt-1">Visit us during business hours</div>
                  <div className="text-orange-600 mt-2">Anna Nagar, Chennai - 600040</div>
                </Card>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-xl font-semibold mb-2">Quick Links</div>
              <ul className="space-y-2 text-gray-700">
                <li>• Privacy Policy</li>
                <li>• Terms of Service</li>
                <li>• Refund Policy</li>
              </ul>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-xl font-semibold mb-4">Frequently Asked Questions</div>
              <div className="space-y-6">
                <div>
                  <div className="font-semibold text-orange-600">Getting Started</div>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>How do I create a profile?</li>
                    <li>Is registration free?</li>
                    <li>How do I verify my profile?</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-orange-600">Privacy & Security</div>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>How is my data protected?</li>
                    <li>Who can see my contact details?</li>
                    <li>Can I hide my profile?</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-orange-600">Membership & Plans</div>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>What are the different membership plans?</li>
                    <li>How do I upgrade my plan?</li>
                    <li>Can I get a refund?</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-orange-600">Finding Matches</div>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>How does the matching algorithm work?</li>
                    <li>How do I send interest to someone?</li>
                    <li>What is horoscope matching?</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-xl font-semibold mb-4">Send Us a Message</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 border rounded-lg" placeholder="Your Name" />
                <input className="w-full px-4 py-3 border rounded-lg" placeholder="your.email@example.com" />
                <input className="sm:col-span-2 w-full px-4 py-3 border rounded-lg" placeholder="Subject" />
                <textarea className="sm:col-span-2 w-full px-4 py-3 border rounded-lg" rows={4} placeholder="Message" />
              </div>
              <Button className="mt-4">Submit</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
