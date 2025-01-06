import type { AuthError } from '@supabase/supabase-js';

export const getAuthErrorMessage = (error: AuthError & { message?: string; code?: string }) => {
  // Add more specific error messages
  switch (error.code) {
    case 'user_already_exists':
      return 'An account with this email already exists. Please sign in instead.';
    case 'invalid_credentials':
      return 'Invalid email or password. Please try again.';
    case 'invalid_grant':
      return 'Invalid email or password. Please try again.';
    case 'email_taken':
      return 'This email is already registered. Please sign in instead.';
    case 'auth/weak-password':
      return 'Password should be at least 8 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please sign up first.';
    default:
      return error.message || 'Authentication failed. Please try again.';
  }
};