import React from 'react';

type SocialPlatform =
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'x'
  | 'reddit'
  | 'youtube';

interface SocialIconsProps {
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className = '' }) => {
  const ICONS: Record<SocialPlatform, string> = {
    instagram: '/icons/Instagram_50Gray.png',
    tiktok: '/icons/TikTok_50Gray.png',
    facebook: '/icons/Facebook_50Gray.png',
    x: '/icons/X_50Gray.png',
    reddit: '/icons/Reddit_50Gray.png',
    youtube: '/icons/YouTube_50Gray.png',
  };

  const LABELS: Record<SocialPlatform, string> = {
    instagram: 'Instagram',
    tiktok: 'TikTok',
    facebook: 'Facebook',
    x: 'X',
    reddit: 'Reddit',
    youtube: 'YouTube',
  };

  return (
    <div className={`flex items-center gap-md ${className}`}>
      {(Object.keys(ICONS) as SocialPlatform[]).map((platform) => (
        <a
          key={platform}
          href={`#${platform}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity duration-200"
          aria-label={LABELS[platform]}
        >
          <img
            src={ICONS[platform]}
            alt=""
            aria-hidden="true"
            className="w-[18px] h-[18px] md:w-xl md:h-xl object-contain"
          />
        </a>
      ))}
    </div>
  );
};
