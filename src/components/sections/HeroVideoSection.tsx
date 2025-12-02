import React from 'react';

interface HeroVideoSectionProps {
  variant: 'mobile' | 'desktop';
  className?: string;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ variant, className = '' }) => {
  
  const config = {
    mobile: {
      // UPDATED: Matches your new "hero-" naming convention
      video: "/video/hero-video-mobile.mp4",
      poster: "/images/hero-poster-mobile.jpg",
      aspect: "aspect-[4/3]",
    },
    desktop: {
      // UPDATED: Matches your new "hero-" naming convention
      video: "/video/hero-video-desktop.mp4",
      poster: "/images/hero-poster-desktop.jpg",
      aspect: "aspect-square",
    }
  };

  const { video, poster, aspect } = config[variant];

  return (
    <div className={`w-full overflow-hidden rounded-lg bg-container-secondary shadow-sm ${aspect} ${className}`}>
      <video
        autoPlay
        muted
        playsInline
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        <img src={poster} alt="Prrrfct Cat" className="w-full h-full object-cover" />
      </video>
    </div>
  );
};