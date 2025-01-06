import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PlayerControls from './PlayerControls';
import PlayerProgress from './PlayerProgress';
import PlayerVolume from './PlayerVolume';
import PlayerVisualizer from './PlayerVisualizer';

const MediaPlayer = () => {
  const { currentTrack } = useSelector((state: RootState) => state.player);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-3 gap-4">
          {/* Track Info */}
          <div className="flex items-center space-x-4">
            <img
              src={currentTrack.cover_art_url}
              alt={currentTrack.title}
              className="h-14 w-14 rounded-md"
            />
            <div>
              <h4 className="text-white font-medium line-clamp-1">{currentTrack.title}</h4>
              <p className="text-white/60 text-sm line-clamp-1">Artist Name</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center justify-center">
            <PlayerControls />
            <PlayerProgress />
          </div>

          {/* Volume & Visualizer */}
          <div className="flex items-center justify-end space-x-4">
            <PlayerVolume />
            <PlayerVisualizer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;