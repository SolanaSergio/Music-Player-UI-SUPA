import React from 'react';

const PlayerProgress = () => {
  return (
    <div className="w-full max-w-xl mt-2">
      <div className="flex items-center space-x-3 text-xs text-white/60">
        <span>0:00</span>
        <div className="flex-1 h-1 bg-white/20 rounded-full">
          <div
            className="h-full bg-white rounded-full relative group"
            style={{ width: '30%' }}
          >
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <span>3:45</span>
      </div>
    </div>
  );
};

export default PlayerProgress;