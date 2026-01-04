import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import Profiles from './pages/admin/Profiles';
import Payments from './pages/admin/Payments';
import Reports from './pages/admin/Reports';
import Staff from './pages/admin/Staff';
import Settings from './pages/admin/Settings';
import Guest from './pages/admin/Guest';
import Plans_price from './pages/admin/Plans_pricing';

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith('/auth/register') ||
    location.pathname.startsWith('/auth/login');
  const hideFooter =
    location.pathname.startsWith('/search') ||
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/auth/register');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="staff" element={<Staff />} />
          <Route path="settings" element={<Settings />} />
          <Route path="guest" element={<Guest />} />
          <Route path="plans_price" element={<Plans_price />} />

        </Route>
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
