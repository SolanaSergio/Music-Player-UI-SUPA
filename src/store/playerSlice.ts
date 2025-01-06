import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../types';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  queue: Track[];
  volume: number;
  isMuted: boolean;
  repeat: 'off' | 'track' | 'queue';
  shuffle: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  queue: [],
  volume: 1,
  isMuted: false,
  repeat: 'off',
  shuffle: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setQueue: (state, action: PayloadAction<Track[]>) => {
      state.queue = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload;
    },
    setRepeat: (state, action: PayloadAction<'off' | 'track' | 'queue'>) => {
      state.repeat = action.payload;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.shuffle = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setQueue,
  setVolume,
  setMuted,
  setRepeat,
  setShuffle,
} = playerSlice.actions;

export default playerSlice.reducer;