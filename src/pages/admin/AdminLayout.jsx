import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Menu, X } from "lucide-react";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b sticky top-0 z-50">
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
        <h1 className="font-semibold">Admin Panel</h1>
      </div>

      <div className="flex">

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0`}
        >
          {/* Close button (mobile) */}
          <div className="md:hidden flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <AdminSidebar />
        </div>

        {/* Overlay (mobile) */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
