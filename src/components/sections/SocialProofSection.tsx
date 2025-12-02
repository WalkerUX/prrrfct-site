import React from 'react';
import { SocialCard } from '@/components/ui/SocialCard';

export const SocialProofSection = () => {
  return (
    // WRAPPER:
    // - Mobile: Center
    // - Desktop: Right (End) to match the video's right edge
    <div className="w-full flex justify-center lg:justify-end">
      <SocialCard />
    </div>
  );
};