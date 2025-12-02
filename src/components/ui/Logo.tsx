import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {/* 1. MOBILE IMAGE (< 768px) 
          - Removed 'fill-none stroke-current' because the new SVG uses fills.
          - Added 'object-contain' to ensure it scales politely.
      */}
      <img 
        src="/logo-mobile.svg" 
        alt="Prrrfct Logo" 
        className="block md:hidden w-full h-full object-contain text-primary" 
      />

      {/* 2. DESKTOP IMAGE (>= 768px) */}
      <img 
        src="/logo-desktop.svg" 
        alt="Prrrfct Logo" 
        className="hidden md:block w-full h-full object-contain text-primary" 
      />
    </div>
  );
};