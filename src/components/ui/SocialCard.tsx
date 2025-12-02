import React from 'react';
import { Text } from './Text';
import { SocialLinksColor } from './SocialLinksColor';

export const SocialCard = () => {
  return (
    <div className={`
      w-full max-w-[363px]
      flex items-center gap-sm
      p-sm rounded-full
      bg-section-primary
    `}>
      
      {/* AVATAR 
          - w-[84px] h-[84px]: Fixed size per your spec
          - flex-shrink-0: Prevents it from squishing if space is tight
      */}
      <div className="flex-shrink-0">
        <img 
          src="/images/GingerbreadAvatarSilo94.jpg" 
          alt="Gingerbread the Prrrfct Cat" 
          className="w-[84px] h-[84px] rounded-full object-cover border border-secondary"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-1">
        <Text 
          variant="body-md" 
          className="font-semibold text-primary tracking-[-0.02em]"
        >
          Follow our mascot Gingerbread
        </Text>
        
        {/* Full Color Icons (Fixed 24px) */}
        <SocialLinksColor />
      </div>

    </div>
  );
};