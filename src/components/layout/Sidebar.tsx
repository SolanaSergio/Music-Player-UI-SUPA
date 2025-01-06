import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart, Music } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-black text-white h-screen fixed left-0 top-0 p-6">
      <div className="flex items-center mb-8">
        <Music className="w-8 h-8 text-green-500" />
        <span className="ml-2 text-xl font-bold">HarmonyStream</span>
      </div>

      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Library className="w-5 h-5" />
          <span>Your Library</span>
        </NavLink>

        <div className="pt-8">
          <NavLink
            to="/create-playlist"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 ${
                isActive ? 'bg-gray-800' : ''
              }`
            }
          >
            <PlusSquare className="w-5 h-5" />
            <span>Create Playlist</span>
          </NavLink>

          <NavLink
            to="/liked-songs"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 ${
                isActive ? 'bg-gray-800' : ''
              }`
            }
          >
            <Heart className="w-5 h-5" />
            <span>Liked Songs</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;