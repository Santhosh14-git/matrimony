import React from "react";

const payments = [
  {
    id: "PAY001",
    user: "Rahul Kumar",
    plan: "Premium",
    amount: "₹5,999",
    status: "Completed",
    date: "2024-12-29",
  },
  {
    id: "PAY002",
    user: "Arjun Menon",
    plan: "Gold",
    amount: "₹3,499",
    status: "Completed",
    date: "2024-12-29",
  },
  {
    id: "PAY003",
    user: "Karthik Raj",
    plan: "Premium",
    amount: "₹5,999",
    status: "Pending",
    date: "2024-12-28",
  },
  {
    id: "PAY004",
    user: "Suresh Babu",
    plan: "Silver",
    amount: "₹1,999",
    status: "Completed",
    date: "2024-12-28",
  },
];

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-orange-100 text-orange-700",
};

const Payments = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payment Transactions</h1>
          <p className="text-gray-600">
            View all payment transactions
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
          Export Report
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left">
              <th className="px-6 py-4 font-medium">Payment ID</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Plan</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{p.id}</td>
                <td className="px-6 py-4">{p.user}</td>
                <td className="px-6 py-4">{p.plan}</td>
                <td className="px-6 py-4 text-orange-600 font-semibold">
                  {p.amount}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[p.status]}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4">{p.date}</td>
                <td className="px-6 py-4">
                  <span className="cursor-pointer text-gray-600 hover:text-black">
                    ✏️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
