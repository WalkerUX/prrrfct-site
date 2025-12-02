import React from 'react';
import { EmailCard } from '@/components/ui/EmailCard';

export const EarlyAccessSection = () => {
  return (
    // Reverted to default (Left Aligned on Desktop)
    <div className="w-full flex justify-center lg:justify-start">
      <EmailCard />
    </div>
  );
};