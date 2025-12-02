import React from 'react';
import { Text } from './Text';

interface CareItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const CareItem: React.FC<CareItemProps> = ({ title, description, imageSrc }) => {
  return (
    // 1. GAP SPACING: Fixed at 12px (gap-sm) per your strict requirement
    <div className="flex items-start gap-sm">
      
      {/* 2. ICON SCALING: 60px (Mobile) -> 80px (Desktop) */}
      <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-container-secondary overflow-hidden border-[1px] border-[#CBCDCD]">
         <img 
           src={imageSrc} 
           alt="" 
           aria-hidden="true"
           className="w-full h-full object-cover" 
         />
      </div>

      {/* 3. TEXT LAYOUT: 'flex items-center' + min-height ensures vertical centering */}
      <div className="flex items-center min-h-[60px] md:min-h-[80px]">
        
        {/* 4. TYPOGRAPHY: 
            - All text is 'text-primary' (Black).
            - Inline spans prevent the hard break.
            - Scales to body-lg (18px) on desktop.
        */}
        <Text variant="body-md" className="text-primary md:text-body-lg">
          <span className="font-semibold">{title}</span>
          {' '}
          <span className="font-normal">{description}</span>
        </Text>
        
      </div>

    </div>
  );
};