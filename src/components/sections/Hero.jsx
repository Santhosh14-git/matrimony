import React from 'react';
import Button from '../ui/Button';
import ImageWithFallback from '../ui/ImageWithFallback';

const Hero = ({ title, subtitle, imageSrc, ctaPrimary, ctaSecondary }) => {
  return (
    <section id="hero" className="bg-gradient-to-r from-[#fff2ed] to-[#efe9ff] px-6 md:px-[5%]">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md ring-1 ring-black/5 text-sm text-gray-700">
            <span>🔔</span>
            <span>India’s Most Trusted Hindu Matrimony Platform</span>
          </div>
          <h1 className="text-[56px] md:text-[64px] font-extrabold text-gray-900 mt-6 leading-[1.05] tracking-tight">
            Find Your Perfect <span className="bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-transparent bg-clip-text">Life</span> Partner
          </h1>
          <p className="text-lg mt-6 text-gray-600 max-w-lg">
            {subtitle}
          </p>
          <div className="mt-8 space-x-4 flex items-center">
            {ctaPrimary}
            {ctaSecondary}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-sm text-gray-700">100% Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">🔒</span>
              <span className="text-sm text-gray-700">Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">❤️</span>
              <span className="text-sm text-gray-700">3000+ Marriages</span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center group">
          <ImageWithFallback
            src={imageSrc}
            fallback="https://images.unsplash.com/photo-1516205651411-aef31a128e17?q=80&w=1200&auto=format&fit=crop"
            alt="Hero"
            className="rounded-[28px] shadow-2xl ring-1 ring-black/5 w-full max-w-[680px] h-[440px] object-cover transform transition-transform duration-500 ease-out group-hover:scale-[1.04] active:scale-[1.04]"
          />
          <div className="absolute -top-6 left-6 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">📈</div>
            <div>
              <p className="text-sm text-gray-500">Active Profiles</p>
              <p className="font-semibold">50,000+</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">💖</div>
            <div>
              <p className="text-sm text-gray-500">Happy Marriages</p>
              <p className="font-semibold">3,000+</p>
            </div>
          </div>
          <div className="absolute bottom-20 left-6 bg-white/90 shadow rounded-xl px-4 py-3 max-w-xs">
            <p className="text-sm text-gray-700">"Our family is complete now"</p>
            <p className="text-xs text-gray-500">Happy VivahaMilan Family</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
