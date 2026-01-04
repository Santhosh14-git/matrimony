import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-primary-color rounded-lg">
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
