import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isInteractive?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  onClick,
  isInteractive = false,
}) => {
  return (
    <div
      className={cn(
        'bg-gray-800 rounded-lg overflow-hidden',
        isInteractive && 'transform transition-transform hover:-translate-y-1 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => (
  <div className={cn('relative aspect-square', className)}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <div className={cn('p-4', className)}>
    {children}
  </div>
);

export default Card;