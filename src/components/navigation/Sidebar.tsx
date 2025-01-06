import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-4 p-1 bg-white rounded-full shadow-lg"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-black" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-black" />
          )}
        </button>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Home className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Home</span>}
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Search className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Search</span>}
            </NavLink>

            <NavLink
              to="/library"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Library className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Your Library</span>}
            </NavLink>
          </div>

          <div className="mt-8 space-y-2">
            <NavLink
              to="/playlists/create"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <PlusSquare className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Create Playlist</span>}
            </NavLink>

            <NavLink
              to="/liked"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Heart className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Liked Songs</span>}
            </NavLink>

            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Bookmark className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Saved Items</span>}
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;