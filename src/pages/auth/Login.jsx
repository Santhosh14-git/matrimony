import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { Link, useNavigate } from 'react-router-dom';
import { heroImage } from '../../assets';

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('email');
  const [value, setValue] = useState('');
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff2ed] via-[#ffeaf3] to-[#f1e9ff] px-6 md:px-[5%]">
      <div className="container mx-auto py-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <div className="grid md:grid-cols-2 gap-8 mt-6 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6f61] to-[#ff9a8d] flex items-center justify-center text-white">❤</span>
              <span className="text-2xl font-bold text-gray-900">VivahaMilan</span>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Welcome Back to Your <span className="bg-gradient-to-r from-[#ff6f61] to-[#7b61ff] bg-clip-text text-transparent">Journey of Love</span>
              </h1>
              <p className="text-gray-600 mt-2">Login to continue finding your perfect life partner. Your dream marriage is just a step away.</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                <div>
                  <div className="font-medium">Secure & Private</div>
                  <div className="text-gray-600 text-sm">Your data is protected with encryption</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✉</span>
                <div>
                  <div className="font-medium">Quick OTP Login</div>
                  <div className="text-gray-600 text-sm">Login securely with one-time password</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="VivahaMilan"
                className="rounded-2xl shadow-lg ring-1 ring-black/5 w-full h-56 object-cover"
              />
            </div>
          </div>
          <div className="md:pl-6">
            <Card className="p-6 md:p-8 shadow-xl">
              <div className="text-2xl font-semibold">Login to Your Account</div>
              <div className="text-sm text-gray-600 mt-1">Enter your credentials to access your profile</div>
              <div className="mt-5">
                <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 p-1">
                  <button
                    className={`px-4 py-2 rounded-full text-sm ${mode === 'email' ? 'bg-white shadow border' : ''}`}
                    onClick={() => { setMode('email'); setValue(''); }}
                  >
                    Email Login
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full text-sm ${mode === 'phone' ? 'bg-white shadow border' : ''}`}
                    onClick={() => { setMode('phone'); setValue(''); }}
                  >
                    Phone Login
                  </button>
                </div>
                <div className="mt-5">
                  <label className="block text-sm text-gray-600 mb-1">{mode === 'email' ? 'Email Address' : 'Phone Number'}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{mode === 'email' ? '✉' : '☎'}</span>
                    <input
                      type={mode === 'email' ? 'email' : 'tel'}
                      placeholder={mode === 'email' ? 'your.email@example.com' : '98765 43210'}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                    />
                  </div>
                </div>
                <button
                  className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white font-semibold shadow hover:opacity-95"
                  onClick={() => navigate('/dashboard')}
                >
                  Send OTP
                </button>
                <div className="flex items-center gap-3 my-5">
                  <div className="h-px flex-1 bg-gray-200" />
                  <div className="text-gray-500 text-sm">OR</div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <Link
                  to="/auth/register"
                  className="block w-full text-center px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 font-semibold"
                >
                  Create New Account
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="block w-full text-center px-6 py-3 mt-3 rounded-lg border border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold"
                >
                  Staff / Admin Login
                </Link>
                <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
                  <div className="font-medium mb-1">Privacy Protected</div>
                  <div>Your information is secure and never shared with third parties. We respect your privacy.</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
