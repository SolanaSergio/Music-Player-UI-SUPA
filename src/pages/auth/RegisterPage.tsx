import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';
import AuthForm from '../../components/auth/AuthForm';
import AuthBackground from '../../components/auth/AuthBackground';
import AuthCard from '../../components/auth/AuthCard';

const RegisterPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <AuthBackground />
      
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
            <Music className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        <AuthCard>
          <AuthForm type="register" />
        </AuthCard>
      </div>
    </div>
  );
};

export default RegisterPage;