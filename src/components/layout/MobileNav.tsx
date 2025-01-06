import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, User } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black text-white z-50">
      <div className="flex justify-around items-center h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 ${
              isActive ? 'text-green-500' : 'text-gray-400'
            }`
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 ${
              isActive ? 'text-green-500' : 'text-gray-400'
            }`
          }
        >
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 ${
              isActive ? 'text-green-500' : 'text-gray-400'
            }`
          }
        >
          <Library className="w-6 h-6" />
          <span className="text-xs">Library</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 ${
              isActive ? 'text-green-500' : 'text-gray-400'
            }`
          }
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;