import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f1220] text-white mt-16">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6f61] to-[#ff9a8d] flex items-center justify-center text-white">
              ❤
            </span>
            <h3 className="font-bold text-lg">VivahaMilan</h3>
          </div>
          <p className="text-gray-400 mt-3 max-w-xs">
            India’s most trusted Hindu matrimony platform. Creating happy marriages since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/plans" className="text-gray-400 hover:text-white">Pricing Plans</Link></li>
            <li><Link to="/#testimonials" className="text-gray-400 hover:text-white">Success Stories</Link></li>
            <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            <li><span className="text-gray-400">Refund Policy</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +91 98765 43210</li>
            <li>✉ support@vivahamilan.com</li>
            <li>📍 Chennai, Tamil Nadu</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} VivahaMilan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
