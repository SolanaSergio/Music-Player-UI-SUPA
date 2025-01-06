import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
} from 'lucide-react';
import { RootState } from '../../store';
import {
  setIsPlaying,
  setRepeat,
  setShuffle,
} from '../../store/playerSlice';

const PlayerControls = () => {
  const dispatch = useDispatch();
  const { isPlaying, repeat, shuffle } = useSelector(
    (state: RootState) => state.player
  );

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => dispatch(setShuffle(!shuffle))}
        className={`p-2 rounded-full transition-colors ${
          shuffle ? 'text-green-500' : 'text-white/60 hover:text-white'
        }`}
      >
        <Shuffle className="h-5 w-5" />
      </button>

      <button className="p-2 text-white/60 hover:text-white transition-colors">
        <SkipBack className="h-5 w-5" />
      </button>

      <button
        onClick={() => dispatch(setIsPlaying(!isPlaying))}
        className="p-3 bg-white rounded-full hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-black" />
        ) : (
          <Play className="h-6 w-6 text-black" />
        )}
      </button>

      <button className="p-2 text-white/60 hover:text-white transition-colors">
        <SkipForward className="h-5 w-5" />
      </button>

      <button
        onClick={() =>
          dispatch(setRepeat(repeat === 'off' ? 'track' : repeat === 'track' ? 'queue' : 'off'))
        }
        className={`p-2 rounded-full transition-colors ${
          repeat !== 'off' ? 'text-green-500' : 'text-white/60 hover:text-white'
        }`}
      >
        <Repeat className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PlayerControls;