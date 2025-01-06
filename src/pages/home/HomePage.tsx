import React from 'react';
import HeroBanner from './components/HeroBanner';
import DJMixesSection from './components/DJMixesSection';
import LatestSongsSection from './components/LatestSongsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="pt-16 md:pl-60 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <HeroBanner />
          <DJMixesSection />
          <LatestSongsSection />
        </div>
      </main>
    </div>
  );
};

export default HomePage;