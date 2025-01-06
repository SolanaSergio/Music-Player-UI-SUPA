/*
  # Initial Schema Setup for Music Streaming Application

  1. New Tables
    - users (extends auth.users)
      - profile information
      - subscription details
    - tracks
      - music track information
      - metadata
    - playlists
      - playlist information
      - creator details
    - playlist_tracks
      - tracks in playlists
      - track order
    - user_library
      - saved content
      - user preferences

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
    - Secure content management
*/

-- Users table extending auth.users
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  display_name text NOT NULL,
  profile_image text,
  subscription_status text NOT NULL DEFAULT 'free',
  created_at timestamptz DEFAULT now(),
  last_login timestamptz DEFAULT now()
);

-- Tracks table
CREATE TABLE IF NOT EXISTS tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist_id uuid NOT NULL,
  album_id uuid NOT NULL,
  duration integer NOT NULL,
  audio_url text NOT NULL,
  cover_art_url text NOT NULL,
  release_date date NOT NULL,
  genre text NOT NULL,
  is_explicit boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Playlists table
CREATE TABLE IF NOT EXISTS playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id uuid REFERENCES users(id) NOT NULL,
  title text NOT NULL,
  description text,
  cover_image text,
  is_public boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Playlist tracks junction table
CREATE TABLE IF NOT EXISTS playlist_tracks (
  playlist_id uuid REFERENCES playlists(id) ON DELETE CASCADE,
  track_id uuid REFERENCES tracks(id) ON DELETE CASCADE,
  position integer NOT NULL,
  added_at timestamptz DEFAULT now(),
  PRIMARY KEY (playlist_id, track_id)
);

-- User library table
CREATE TABLE IF NOT EXISTS user_library (
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  content_id uuid NOT NULL,
  content_type text NOT NULL,
  added_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, content_id, content_type)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlist_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_library ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read their own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Tracks policies
CREATE POLICY "Anyone can read tracks"
  ON tracks
  FOR SELECT
  TO authenticated
  USING (true);

-- Playlists policies
CREATE POLICY "Users can create playlists"
  ON playlists
  FOR INSERT
  TO authenticated
  WITH CHECK (creator_id = auth.uid());

CREATE POLICY "Users can read public playlists"
  ON playlists
  FOR SELECT
  TO authenticated
  USING (is_public OR creator_id = auth.uid());

CREATE POLICY "Users can update own playlists"
  ON playlists
  FOR UPDATE
  TO authenticated
  USING (creator_id = auth.uid());

CREATE POLICY "Users can delete own playlists"
  ON playlists
  FOR DELETE
  TO authenticated
  USING (creator_id = auth.uid());

-- Playlist tracks policies
CREATE POLICY "Users can modify tracks in own playlists"
  ON playlist_tracks
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM playlists
      WHERE id = playlist_id
      AND creator_id = auth.uid()
    )
  );

CREATE POLICY "Users can read tracks in public playlists"
  ON playlist_tracks
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM playlists
      WHERE id = playlist_id
      AND (is_public OR creator_id = auth.uid())
    )
  );

-- User library policies
CREATE POLICY "Users can manage their library"
  ON user_library
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());