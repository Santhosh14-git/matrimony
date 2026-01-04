import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCog,
  CreditCard,
  Receipt,
  Bell,
  UserCheck,
  Settings,
  LogOut,
} from "lucide-react";

const adminLinks = [
  { to: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/profiles", label: "Manage Profiles", icon: UserCog },
  { to: "/admin/guest", label: "Guest Users", icon: Users },
  { to: "/admin/plans_price", label: "Plans & Pricing", icon: CreditCard },
  { to: "/admin/payments", label: "Payments", icon: Receipt },
  { to: "/admin/notifications", label: "Push Notifications", icon: Bell },
  { to: "/admin/staff", label: "Staff Management", icon: UserCheck },
];

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen border-r px-4 py-6">
      <nav className="space-y-2">
        {adminLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
              ${isActive
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}

        <div className="border-t my-4" />

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
            ${isActive
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>

        <button
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full"
          onClick={() => console.log("Logout")}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
