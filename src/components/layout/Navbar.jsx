import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const loggedInView =
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/search') ||
    location.pathname.startsWith('/plans') ||
    location.pathname.startsWith('/profile') ||
    location.pathname.startsWith('/support');

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-4 md:px-[5%]">
      <div className="container mx-auto flex justify-between items-center py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6f61] to-[#ff9a8d] flex items-center justify-center text-white">
            ❤
          </span>
          <span className="text-xl font-bold text-gray-900">VivahaMilan</span>
        </Link>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-6 w-full justify-end">
          {loggedInView ? (
            <>
              <input
                type="text"
                className="max-w-md w-full px-4 py-2 rounded-full border border-gray-300"
                placeholder="Search profiles by ID, name, location…"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/search?query=${encodeURIComponent(e.currentTarget.value)}`);
                  }
                }}
              />
              <span className="relative text-2xl cursor-pointer">
                🔔
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </span>
            </>
          ) : (
            <>
              <Link to="/#how-it-works" className="nav-link">Features</Link>
              <Link to="/#testimonials" className="nav-link">Success Stories</Link>
              <Link to="/plans" className="nav-link">Plans</Link>
              <Link to="/support" className="nav-link">Support</Link>
              <Link
                to="/auth/login"
                className="px-4 py-2 border border-primary-color text-primary-color rounded-lg hover:bg-primary-color hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white shadow"
              >
                Register Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {loggedInView ? (
            <>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
                placeholder="Search profiles…"
              />
              <div className="flex justify-between items-center">
                <span className="text-xl">🔔 Notifications</span>
              </div>
            </>
          ) : (
            <>
              <Link to="/#how-it-works" className="block">Features</Link>
              <Link to="/#testimonials" className="block">Success Stories</Link>
              <Link to="/plans" className="block">Plans</Link>
              <Link to="/support" className="block">Support</Link>
              <Link
                to="/auth/login"
                className="block text-center border border-primary-color py-2 rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block text-center bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white py-2 rounded-lg"
              >
                Register Free
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
