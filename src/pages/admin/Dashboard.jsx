import React from 'react';
import Card from '../../components/ui/Card';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <div className="flex items-center gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          <div className="relative cursor-pointer">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon="👥"
          value="5,234"
          label="Total Profiles"
          growth="+12%"
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          icon="✅"
          value="4,892"
          label="Verified Profiles"
          growth="+8%"
          color="bg-green-100 text-green-600"
        />
        <StatCard
          icon="💳"
          value="2,145"
          label="Active Plans"
          growth="+15%"
          color="bg-purple-100 text-purple-600"
        />
        <StatCard
          icon="📈"
          value="₹12.5L"
          label="Revenue This Month"
          growth="+20%"
          color="bg-orange-100 text-orange-600"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Profiles */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Profile Registrations</h3>

          <ProfileItem
            name="Divya Krishnan"
            meta="Chennai • VM24001"
            status="Pending Verification"
            statusColor="bg-orange-100 text-orange-600"
          />
          <ProfileItem
            name="Priya Sharma"
            meta="Bangalore • VM24002"
            status="Verified"
            statusColor="bg-green-100 text-green-600"
          />
          <ProfileItem
            name="Lakshmi Reddy"
            meta="Hyderabad • VM24003"
            status="Pending Verification"
            statusColor="bg-orange-100 text-orange-600"
          />
          <ProfileItem
            name="Aishwarya Patel"
            meta="Mumbai • VM24004"
            status="Verified"
            statusColor="bg-green-100 text-green-600"
          />
          <ProfileItem
            name="Anjali Iyer"
            meta="Coimbatore • VM24005"
            status="Under Review"
            statusColor="bg-blue-100 text-blue-600"
          />
        </Card>

        {/* Recent Payments */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>

          <PaymentItem
            name="Rahul Kumar"
            plan="Premium Plan"
            amount="₹5,999"
            status="Completed"
            statusColor="bg-green-100 text-green-600"
          />
          <PaymentItem
            name="Arjun Menon"
            plan="Gold Plan"
            amount="₹3,499"
            status="Completed"
            statusColor="bg-green-100 text-green-600"
          />
          <PaymentItem
            name="Karthik Raj"
            plan="Premium Plan"
            amount="₹5,999"
            status="Pending"
            statusColor="bg-orange-100 text-orange-600"
          />
          <PaymentItem
            name="Suresh Babu"
            plan="Silver Plan"
            amount="₹1,999"
            status="Completed"
            statusColor="bg-green-100 text-green-600"
          />
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

/* ================= REUSABLE COMPONENTS ================= */

const StatCard = ({ icon, value, label, growth, color }) => (
  <Card className="p-6 flex justify-between items-start">
    <div>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <p className="text-2xl font-bold mt-4">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
      {growth}
    </span>
  </Card>
);

const ProfileItem = ({ name, meta, status, statusColor }) => (
  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-3">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{meta}</p>
    </div>
    <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
      {status}
    </span>
  </div>
);

const PaymentItem = ({ name, plan, amount, status, statusColor }) => (
  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-3">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{plan}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold text-orange-600">{amount}</p>
      <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
        {status}
      </span>
    </div>
  </div>
);
