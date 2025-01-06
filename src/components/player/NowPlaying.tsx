import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
} from 'lucide-react';
import { RootState } from '../../store';
import {
  setIsPlaying,
  setMuted,
  setRepeat,
  setShuffle,
} from '../../store/playerSlice';

const NowPlaying = () => {
  const dispatch = useDispatch();
  const { currentTrack, isPlaying, isMuted, repeat, shuffle } = useSelector(
    (state: RootState) => state.player
  );

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white h-20 flex items-center px-4 md:px-8">
      <div className="flex items-center w-1/3">
        <img
          src={currentTrack.cover_art_url}
          alt={currentTrack.title}
          className="w-14 h-14 rounded"
        />
        <div className="ml-4">
          <h4 className="text-sm font-medium">{currentTrack.title}</h4>
          <p className="text-xs text-gray-400">{currentTrack.artist_name}</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(setShuffle(!shuffle))}
            className={`p-2 rounded-full ${
              shuffle ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="p-2">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => dispatch(setIsPlaying(!isPlaying))}
            className="p-3 bg-white rounded-full"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black" />
            )}
          </button>
          <button className="p-2">
            <SkipForward className="w-5 h-5" />
          </button>
          <button
            onClick={() =>
              dispatch(
                setRepeat(
                  repeat === 'off'
                    ? 'track'
                    : repeat === 'track'
                    ? 'queue'
                    : 'off'
                )
              )
            }
            className={`p-2 rounded-full ${
              repeat !== 'off' ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <Repeat className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full max-w-md mt-2">
          <div className="h-1 bg-gray-600 rounded-full">
            <div className="h-1 bg-white rounded-full w-1/3"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/3">
        <button
          onClick={() => dispatch(setMuted(!isMuted))}
          className="p-2"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <div className="w-24 h-1 bg-gray-600 rounded-full ml-2">
          <div className="h-1 bg-white rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;