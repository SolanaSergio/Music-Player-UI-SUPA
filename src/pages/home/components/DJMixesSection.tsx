import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import Card from '../../../components/ui/Card';

interface DJMix {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
}

const MIXES: DJMix[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'DJ Sunshine',
    coverUrl: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1',
    duration: '1:20:00'
  },
  {
    id: '2',
    title: 'Deep House Journey',
    artist: 'DJ Moonlight',
    coverUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    duration: '1:45:00'
  }
];

const DJMixesSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Year, New DJ Mixes</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {MIXES.map((mix) => (
          <Card key={mix.id} isInteractive>
            <div className="group relative">
              <Card.Image src={mix.coverUrl} alt={mix.title} />
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Play className="w-5 h-5 text-black" />
              </button>
            </div>
            <Card.Content>
              <h3 className="font-semibold truncate">{mix.title}</h3>
              <p className="text-sm text-gray-400 truncate">{mix.artist}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DJMixesSection;