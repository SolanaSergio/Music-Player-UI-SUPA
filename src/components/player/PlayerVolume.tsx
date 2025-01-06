import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Volume2, VolumeX } from 'lucide-react';
import { RootState } from '../../store';
import { setVolume, setMuted } from '../../store/playerSlice';

const PlayerVolume = () => {
  const dispatch = useDispatch();
  const { volume, isMuted } = useSelector((state: RootState) => state.player);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => dispatch(setMuted(!isMuted))}
        className="p-2 text-white/60 hover:text-white transition-colors"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
      
      <div className="w-24 group">
        <div className="h-1 bg-white/20 rounded-full">
          <div
            className="h-full bg-white rounded-full relative group-hover:bg-green-500"
            style={{ width: `${isMuted ? 0 : volume * 100}%` }}
          >
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerVolume;