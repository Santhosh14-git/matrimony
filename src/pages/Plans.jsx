import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import Landing from './Landing';

const Plans = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-6 px-[5%]">
        <div className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900">← Back</button>
            <div className="text-xl font-semibold">Choose Your Plan</div>
          </div>
        </div>
        <div className="text-center mt-6">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">Choose Your Plan</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Find Your Perfect Match with the <span className="text-purple-600">Right Plan for You</span></h1>
          <p className="text-gray-600 mt-2">Choose a plan that suits your needs. All plans include secure platform, verified profiles, and family-friendly environment.</p>
          <div className="mt-3 flex justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">50,000+ Active Users</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">3,000+ Successful Marriages</span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">100% Secure & Private</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {[
            {
              name: 'Basic', price: 'Free', button: 'Get Started', icon: '♡',
              includes: ['Create profile', 'View 5 profiles per day', 'Send 3 interests per month', 'Basic search filters', 'Standard support', 'Profile visibility: Normal'],
              excludes: ['Contact details', 'Advanced filters', 'Priority support', 'Horoscope matching'],
            },
            {
              name: 'Silver', price: '₹1,999 /3 months', button: 'Choose Plan', icon: '★',
              includes: ['Everything in Basic', 'View 50 profiles per day', 'Send 30 interests per month', 'Advanced search filters', 'View contact numbers', 'Priority listing', 'Email support', 'Profile highlighted'],
              excludes: ['Dedicated relationship manager', 'Assisted profile creation'],
            },
            {
              name: 'Gold', price: '₹3,499 /6 months', button: 'Choose Plan', highlight: 'MOST POPULAR', icon: '⚡',
              includes: ['Everything in Silver', 'Unlimited profile views', 'Send 100 interests per month', 'Horoscope matching service', 'Priority customer support', 'Profile featured on homepage', 'WhatsApp support', 'Personalized match suggestions', 'Video call feature'],
              excludes: ['Background verification', 'Meet & greet events'],
            },
            {
              name: 'Premium', price: '₹5,999 /12 months', button: 'Choose Plan', highlight: 'RECOMMENDED', icon: '👑',
              includes: ['Everything in Gold', 'Unlimited interests', 'Dedicated relationship manager', 'Assisted profile creation', 'Premium profile badge', 'Top listing priority', '24/7 phone support', 'Background verification', 'Meet & greet events access', 'Exclusive member benefits', 'Profile promotion', 'Success coach consultation'],
            },
          ].map((t) => (
            <Card
              key={t.name}
              className={`p-6 relative ${t.highlight ? 'border-2 border-orange-400' : 'border border-gray-200'}`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs border border-orange-300">
                  {t.highlight}
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xl">{t.icon}</span>
                <div className="text-sm text-gray-500">{t.name === 'Gold' ? 'Most popular choice' : t.name === 'Premium' ? 'Complete matrimony solution' : t.name === 'Silver' ? 'Perfect for active seekers' : 'Get started with basic features'}</div>
              </div>
              <h3 className="text-2xl font-semibold mt-4">{t.name}</h3>
              <p className="text-2xl font-bold text-primary-color mt-2">{t.price}</p>
              <Button className="mt-4">{t.button}</Button>
              <div className="mt-4">
                <div className="font-semibold">What's included:</div>
                <ul className="text-gray-700 mt-2 space-y-1">
                  {t.includes.map((i) => (<li key={i}>✓ {i}</li>))}
                </ul>
                {t.excludes && (
                  <div className="mt-3">
                    <div className="font-semibold text-gray-600">Not included:</div>
                    <ul className="text-gray-500 mt-1 space-y-1">
                      {t.excludes.map((i) => (<li key={i}>✕ {i}</li>))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-4">Compare All Plans</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border rounded-xl overflow-hidden bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Features</th>
                  <th className="px-4 py-3">Free</th>
                  <th className="px-4 py-3">Silver</th>
                  <th className="px-4 py-3">Gold</th>
                  <th className="px-4 py-3">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Profile Creation', '✓', '✓', '✓', '✓'],
                  ['Profile Views/Day', '5', '50', 'Unlimited', 'Unlimited'],
                  ['Send Interests', '3/month', '30/month', '100/month', 'Unlimited'],
                  ['View Contact Details', '—', '✓', '✓', '✓'],
                  ['Advanced Filters', '—', '✓', '✓', '✓'],
                  ['Horoscope Matching', '—', '—', '✓', '✓'],
                  ['Priority Support', '—', 'Email', 'Priority', '24/7 Phone'],
                  ['Background Verification', '—', '—', '—', '✓'],
                  ['Meet & Greet Events', '—', '—', '—', '✓'],
                  ['Exclusive Member Benefits', '—', '—', '—', '✓'],
                  ['Profile Promotion', '—', '—', '—', '✓'],
                  ['Success Coach Consultation', '—', '—', '—', '✓'],
                ].map((row) => (
                  <tr key={row[0]} className="border-t">
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 3 ? 'bg-orange-50' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              ['Can I upgrade my plan later?', 'Yes, you can upgrade anytime. The difference will be adjusted based on remaining subscription period.'],
              ['Is my payment information secure?', 'We use industry-standard encryption and secure gateways. Your financial information is never stored on our servers.'],
              ['What happens after my subscription expires?', 'Your profile remains active but reverts to the Free plan. Renew any time to regain premium features.'],
              ['Do you offer refunds?', 'We offer a 7-day money-back guarantee if you are not satisfied. See our refund policy.'],
            ].map((qa) => (
              <Card key={qa[0]} className="p-6">
                <div className="font-semibold">{qa[0]}</div>
                <div className="text-gray-700 mt-2">{qa[1]}</div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-2xl p-8 bg-white text-gray-900 text-center border">
          <div className="text-2xl font-bold">Still Have Questions?</div>
          <p className="opacity-80 mt-1">Our support team is here to help you choose the right plan.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button variant="outline">Contact Support</Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
