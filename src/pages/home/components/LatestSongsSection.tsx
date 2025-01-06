import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: string;
}

const SONGS: Song[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Eclipse',
    albumArt: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b',
    duration: '3:45'
  },
  {
    id: '2',
    title: 'Sunset Boulevard',
    artist: 'The Waves',
    albumArt: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
    duration: '4:20'
  }
];

const LatestSongsSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Songs</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          Show all
        </button>
      </div>

      <div className="space-y-2">
        {SONGS.map((song, index) => (
          <div
            key={song.id}
            className="group flex items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <div className="w-10 h-10 flex-shrink-0 relative">
              <span className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:hidden">
                {index + 1}
              </span>
              <img
                src={song.albumArt}
                alt={song.title}
                className="w-full h-full object-cover rounded hidden group-hover:block"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-grow min-w-0">
              <h3 className="font-medium truncate">{song.title}</h3>
              <p className="text-sm text-gray-400 truncate">{song.artist}</p>
            </div>

            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-gray-400 hover:text-white">
                <Heart className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-400">{song.duration}</span>
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestSongsSection;