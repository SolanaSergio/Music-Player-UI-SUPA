import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const BANNERS: Banner[] = [
  {
    id: '1',
    title: 'Featured Playlist',
    subtitle: 'Discover new music every week',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    link: '/playlist/featured'
  },
  {
    id: '2',
    title: 'Top Charts',
    subtitle: 'Most played tracks this week',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    link: '/charts'
  }
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <div 
      className="relative h-[300px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
            <p className="text-lg text-gray-200">{banner.subtitle}</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % BANNERS.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;