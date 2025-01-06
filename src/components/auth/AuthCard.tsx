import React from 'react';
import { cn } from '../../utils/cn';

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_8s_ease-in-out_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "transform-gpu", // Hardware acceleration
        className
      )}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default AuthCard;