import { createClient } from '@supabase/supabase-js';
import { config } from './config';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const getSupabase = () => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  
  if (!supabaseInstance) {
    supabaseInstance = createClient(config.supabase.url!, config.supabase.anonKey!);
  }
  
  return supabaseInstance;
};

export const isSupabaseConfigured = () => {
  return Boolean(config.supabase.url && config.supabase.anonKey);
};