import React from 'react';

type SocialPlatform =
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'x'
  | 'reddit'
  | 'youtube';

export const SocialLinksColor = () => {
  const ICONS: Record<SocialPlatform, string> = {
    instagram: '/icons/Instagram.png',
    tiktok: '/icons/TikTok.png',
    facebook: '/icons/Facebook.png',
    x: '/icons/X.png',
    reddit: '/icons/Reddit.png',
    youtube: '/icons/YouTube.png',
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
    <div className="flex items-center gap-xs">
      {(Object.keys(ICONS) as SocialPlatform[]).map((platform) => (
        <a
          key={platform}
          href={`#${platform}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-xl h-xl min-w-[24px] min-h-[24px] flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          aria-label={`Follow Gingerbread on ${LABELS[platform]}`}
        >
          <img
            src={ICONS[platform]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </a>
      ))}
    </div>
  );
};
