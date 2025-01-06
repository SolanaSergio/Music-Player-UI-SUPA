import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';
import AuthForm from '../../components/auth/AuthForm';
import AuthBackground from '../../components/auth/AuthBackground';
import AuthCard from '../../components/auth/AuthCard';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <AuthBackground />
      
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
            <Music className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Don't have an account?{' '}
            <Link 
              to="/register" 
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        <AuthCard>
          <AuthForm type="login" />
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black/40 px-2 text-gray-400">
                  Forgot your password?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/reset-password"
                className="flex h-12 w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default LoginPage;