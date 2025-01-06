export interface User {
  id: string;
  email: string;
  display_name: string;
  profile_image?: string;
  subscription_status: 'free' | 'premium';
  created_at: string;
  last_login: string;
}

export interface Track {
  id: string;
  title: string;
  artist_id: string;
  album_id: string;
  duration: number;
  audio_url: string;
  cover_art_url: string;
  release_date: string;
  genre: string;
  is_explicit: boolean;
}

export interface Playlist {
  id: string;
  creator_id: string;
  title: string;
  description: string;
  cover_image: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  tracks: Track[];
}