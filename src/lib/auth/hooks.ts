import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setToken, setError } from '../../store/authSlice';
import { getSupabase } from '../supabase';
import { getAuthErrorMessage } from '../../utils/auth';
import { fetchUserProfile, createUserProfile } from './api';
import type { AuthError } from '@supabase/supabase-js';

interface UseAuthReturn {
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setAuthError] = useState<string | null>(null);

  const handleAuthError = (error: AuthError & { message?: string }) => {
    const errorMessage = getAuthErrorMessage(error);
    console.error('Auth error:', error);
    setAuthError(errorMessage);
    dispatch(setError(errorMessage));
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Authentication is not configured');

      const { data: { session, user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (session && user) {
        try {
          let userProfile = await fetchUserProfile(user.id);
          
          // If profile doesn't exist, create it
          if (!userProfile) {
            userProfile = await createUserProfile({
              id: user.id,
              email: user.email!,
              display_name: user.user_metadata.display_name || email.split('@')[0],
            });
          }
          
          dispatch(setToken(session.access_token));
          dispatch(setUser(userProfile));
          navigate('/');
        } catch (profileError) {
          console.error('Profile error:', profileError);
          throw new Error('Failed to load user profile');
        }
      }
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, displayName: string) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Authentication is not configured');

      // Proceed with registration
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName },
        },
      });

      if (error) {
        // Handle user already exists error
        if (error.message.includes('already registered')) {
          setAuthError('An account with this email already exists. Please sign in instead.');
          navigate('/login');
          return;
        }
        throw error;
      }

      if (data.user) {
        try {
          const userProfile = await createUserProfile({
            id: data.user.id,
            email: data.user.email!,
            display_name: displayName,
            subscription_status: 'free',
            created_at: new Date().toISOString(),
            last_login: new Date().toISOString(),
          });

          if (data.session) {
            dispatch(setToken(data.session.access_token));
          }
          dispatch(setUser(userProfile));
          navigate('/');
        } catch (profileError) {
          console.error('Profile creation error:', profileError);
          // Clean up auth user if profile creation fails
          await supabase.auth.signOut();
          throw new Error('Failed to create user profile');
        }
      }
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    login,
    register,
  };
};