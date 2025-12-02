import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { StandaloneLink } from '@/components/ui/StandaloneLink';

interface HeaderProps {
  authorized?: boolean; 
}

export const Header: React.FC<HeaderProps> = ({ authorized = false }) => {
  return (
    // HEADER WRAPPER
    // - Removed 'sticky' (Scrolls with page)
    // - 'relative': Establishes stacking context
    <header className="w-full bg-section-primary border-b border-transparent relative transition-all">
      
      {/* ORANGE BAR (Desktop Only) - Absolute positioning keeps it out of flex flow */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-[18px] bg-brand-primary z-50" />

      {/* HEADER CONTENT 
          - h-[80px]: Mobile height
          - lg:h-[138px]: Desktop height (120px content + 18px bar)
          - lg:pt-[18px]: Pushes content down so it centers in the white space, not the whole box
      */}
      <div className="w-full max-w-page mx-auto px-page h-[80px] lg:h-[138px] lg:pt-[18px] flex items-center justify-between relative">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0 z-10">
          <Logo className="w-[64px] h-[37px] lg:w-[108px] lg:h-[63px]" />
        </div>

        {/* 2. NAVIGATION 
            - Absolute positioning centers it horizontally
            - top-[calc(50%+9px)]: Offsets the center point by 9px (half of the 18px bar) 
              to ensure it looks visually centered in the white area.
        */}
        {authorized && (
          <nav className="hidden lg:flex items-center gap-xl absolute left-1/2 top-[calc(50%+9px)] -translate-x-1/2 -translate-y-1/2">
            <StandaloneLink href="#" selected size="md">
              Current Condo
            </StandaloneLink>
            <StandaloneLink href="#" size="md">
              All Condos
            </StandaloneLink>
            <StandaloneLink href="#" size="md">
              Playground
            </StandaloneLink>
          </nav>
        )}

        {/* 3. RIGHT SIDE (Empty) */}
        <div className="ml-auto z-10"></div>

      </div>
    </header>
  );
};