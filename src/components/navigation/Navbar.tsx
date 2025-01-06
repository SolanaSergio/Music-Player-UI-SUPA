import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, Music } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">HarmonyStream</span>
          </Link>

          {/* Search Bar */}
          <div className={`flex-1 max-w-2xl mx-8 ${isSearchOpen ? 'block' : 'hidden md:block'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            {user ? (
              <Link
                to="/profile"
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10"
              >
                {user.profile_image ? (
                  <img
                    src={user.profile_image}
                    alt={user.display_name}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <User className="h-5 w-5 text-white" />
                )}
                <span className="hidden md:block text-white">{user.display_name}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-white/80 font-medium"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;