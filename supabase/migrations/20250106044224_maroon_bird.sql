/*
  # Fix User Creation Process
  
  1. Changes
    - Drop existing tables and functions cleanly
    - Recreate users table with proper constraints
    - Improve trigger function with better error handling
*/

-- Clean up existing objects
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();
DROP TABLE IF EXISTS public.users CASCADE;

-- Create users table
CREATE TABLE public.users (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  display_name text NOT NULL,
  profile_image text,
  subscription_status text NOT NULL DEFAULT 'free'
    CHECK (subscription_status IN ('free', 'premium')),
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT users_email_key UNIQUE (email),
  CONSTRAINT users_auth_id_fkey FOREIGN KEY (id)
    REFERENCES auth.users(id)
    ON DELETE CASCADE
);

-- Create more robust trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.users (
    id,
    email,
    display_name,
    created_at,
    last_login
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data->>'display_name',
      split_part(NEW.email, '@', 1)
    ),
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
END;
$$;

-- Create trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);