import { getSupabase } from '../supabase';
import type { User } from '../../types';

export async function fetchUserProfile(userId: string): Promise<User | null> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
  
  return data as User | null;
}

export async function createUserProfile(userData: Partial<User>): Promise<User> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase not configured');

  // Ensure required fields are present
  if (!userData.id || !userData.email || !userData.display_name) {
    throw new Error('Missing required user data');
  }

  // Use upsert to handle potential race conditions
  const { data, error } = await supabase
    .from('users')
    .upsert({
      id: userData.id,
      email: userData.email,
      display_name: userData.display_name,
      subscription_status: userData.subscription_status || 'free',
      created_at: userData.created_at || new Date().toISOString(),
      last_login: userData.last_login || new Date().toISOString(),
    }, {
      onConflict: 'id',
      ignoreDuplicates: false,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }

  return data as User;
}