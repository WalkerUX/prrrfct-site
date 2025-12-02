import React from 'react';
import { Text } from '@/components/ui/Text';
import { CareItem } from '@/components/ui/CareItem';

export const CareSection = () => {
  return (
    <div className="flex flex-col gap-xl">
      
      <Text variant="h4" className="font-bold">
        Your 1-Minute Care Loop
      </Text>
      
      {/* LIST ITEMS */}
      <div className="flex flex-col gap-xs lg:gap-md">
        <CareItem 
          title="Feed them:" 
          description="Select from their favorite foods and satisfy their hunger."
          imageSrc="/images/icon-feed.png" 
        />
        <CareItem 
          title="Pet them:" 
          description="Give them a loving pat to hear their soothing, happy purr."
          imageSrc="/images/icon-pet.png" 
        />
        <CareItem 
          title="Groom them:" 
          description="A quick brushing makes your Cat sigh with pleasure, keeping their coat smooth and shiny."
          imageSrc="/images/icon-groom.png" 
        />
      </div>

      {/* PRICING BLOCK 
          - Removed 'border-t' and 'pt-sm'
          - Just uses standard gap/margin now
      */}
      <div className="flex flex-col gap-xs lg:gap-md mt-md">
         <Text variant="body-lg" className="font-bold">
           Prrrfct is free, with optional premium features from $0.99
         </Text>
         <CareItem 
            title="Play with them:" 
            description="Add premium toys, treats, outfits and more to match your Cat’s personality."
            imageSrc="/images/icon-play.png" 
          />
      </div>

    </div>
  );
};