import React from 'react';

const AuthBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient - static */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Texture overlay with reduced opacity and better performance */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614149162883-504ce4d13909')] 
        opacity-10 mix-blend-overlay bg-fixed"
        style={{ willChange: 'transform' }}
      />
      
      {/* Optimized blur */}
      <div className="absolute inset-0 backdrop-blur-[80px]" />
      
      {/* Dot pattern with reduced density */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] 
          [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ willChange: 'transform' }}
        />
      </div>
    </div>
  );
};

export default AuthBackground;