"use client";

import React from 'react';
import { Text } from './Text';
import { Button } from './Button';
import { Input } from './Input';

export const EmailCard = () => {
  return (
    // OUTER WRAPPER: Handles positioning
    // - w-full: Full width on mobile
    // - lg:w-[596px]: Fixed 596px on Desktop
    <div className="w-full lg:w-[596px]">
      
      {/* CARD CONTAINER 
          - rounded-lg: 24px
          - border: #CBCDCD
          - py-xl: 24px Vertical Padding
          - px-2xl: 32px Horizontal Padding
      */}
      <div className={`
        w-full
        flex flex-col items-center text-center 
        bg-section-primary 
        rounded-lg 
        border border-[#CBCDCD]
        py-xl px-2xl
        shadow-sm
      `}>
        
        {/* Headline */}
        <div className="mb-lg">
          <Text as="h3" variant="h3" color="primary" className="font-bold">
            Get early access—and extra treats!
          </Text>
        </div>

        {/* Input Row 
            - flex-col: Stacked on very small screens (optional safety)
            - sm:flex-row: Horizontal on most screens
            - gap-xs: 8px spacing (Updated from gap-sm)
        */}
        <form 
          className="flex flex-col sm:flex-row gap-xs w-full mb-lg" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-grow">
            <Input 
              type="email" 
              placeholder="Enter email address" 
              aria-label="Email Address"
            />
          </div>
          <Button variant="primary" className="whitespace-nowrap">
            Join now
          </Button>
        </form>
        
        {/* Subtext */}
        <div className="space-y-xs">
          <Text variant="body-md" color="primary" className="font-bold">
            Prrrfct is launching in December 2025.
          </Text>
          <Text variant="body-md" color="primary">
            Sign up early to reserve your spot—and get <span className="font-bold">5 free Cat toys and treats</span> when we go live!
          </Text>
        </div>

      </div>
    </div>
  );
};