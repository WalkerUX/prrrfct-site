import React from 'react';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-lg w-full max-w-md mx-auto">
      
      {/* 1. HERO IMAGE 
          - Aspect Ratio: Looks like 4:3 or similar in the screenshot.
          - Rounded corners: Matches your general card radius.
      */}
      <div className="w-full overflow-hidden rounded-lg bg-container-secondary">
        <img 
          src="/images/GingerbreadAvatarSilo94.jpg" 
          alt="Prrrfct Cat Hero" 
          className="w-full h-auto object-cover aspect-[4/3]"
        />
      </div>

      {/* 2. CONTENT CONTAINER 
          - Gap: 4px (Matches your spec screenshot exactly)
      */}
      <div className="flex flex-col gap-[4px]">
        
        {/* HEADLINE 
            - Size: 40px (H2 token) based on your spec image.
            - Weight: Bold (700).
        */}
        <Text 
          as="h1" 
          variant="h2" // Mobile H2 = 40px
          className="font-bold text-primary leading-tight"
        >
          Prrrfct Cat brings play to every day
        </Text>
        
        {/* SUBHEAD
            - Size: 18px (Body LG/B1).
            - Weight: Semibold (600) based on spec.
            - Color: Tertiary (#505759).
        */}
        <Text 
          variant="body-lg" 
          className="font-semibold text-tertiary"
        >
          Caring for your AI-powered furry friend brings a relaxing moment of joy to your day.
        </Text>

      </div>

      {/* 3. CTA BUTTON 
          - 'w-fit': Does not stretch full width (based on visual).
          - 'mt-xs': A little breathing room (optional, adjust if needed).
      */}
      <div className="pt-xs">
        <Button variant="brand-primary" className="px-xl">
          Watch demo
        </Button>
      </div>

    </section>
  );
};