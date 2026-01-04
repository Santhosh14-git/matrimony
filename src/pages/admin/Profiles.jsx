import React from "react";
import {
  Search,
  Filter,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

const profiles = [
  {
    id: "VM24001",
    name: "Divya Krishnan",
    age: 26,
    location: "Chennai",
    status: "Pending Verification",
    registered: "2024-12-29",
  },
  {
    id: "VM24002",
    name: "Priya Sharma",
    age: 24,
    location: "Bangalore",
    status: "Verified",
    registered: "2024-12-29",
  },
  {
    id: "VM24003",
    name: "Lakshmi Reddy",
    age: 27,
    location: "Hyderabad",
    status: "Pending Verification",
    registered: "2024-12-28",
  },
  {
    id: "VM24004",
    name: "Aishwarya Patel",
    age: 25,
    location: "Mumbai",
    status: "Verified",
    registered: "2024-12-28",
  },
  {
    id: "VM24005",
    name: "Anjali Iyer",
    age: 23,
    location: "Coimbatore",
    status: "Under Review",
    registered: "2024-12-27",
  },
];

const statusStyles = {
  Verified: "bg-green-100 text-green-700",
  "Pending Verification": "bg-orange-100 text-orange-600",
  "Under Review": "bg-blue-100 text-blue-600",
};

const Profiles = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Manage Profiles</h1>
          <p className="text-gray-500 text-sm">
            Review and manage user profiles
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">
            Export Data
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow border">
        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search profiles by ID, name, location..."
              className="pl-9 pr-4 py-2 w-full border rounded-lg text-sm outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3">Profile ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Registered</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {profiles.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{p.id}</td>
                  <td className="px-6 py-4">{p.name}</td>
                  <td className="px-6 py-4">{p.age}</td>
                  <td className="px-6 py-4">{p.location}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{p.registered}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <Edit
                      size={16}
                      className="text-gray-600 cursor-pointer"
                    />
                    {p.status !== "Verified" && (
                      <span className="bg-green-500 text-white p-2 rounded-lg cursor-pointer">
                        <CheckCircle size={16} />
                      </span>
                    )}
                    <Trash2
                      size={16}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
