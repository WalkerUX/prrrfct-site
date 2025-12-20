import React from "react";

type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "x"
  | "reddit"
  | "youtube";

interface SocialIconsProps {
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  const ICONS: Record<SocialPlatform, string> = {
    instagram: "/icons/Instagram_50Gray.png",
    tiktok: "/icons/TikTok_50Gray.png",
    facebook: "/icons/Facebook_50Gray.png",
    x: "/icons/X_50Gray.png",
    reddit: "/icons/Reddit_50Gray.png",
    youtube: "/icons/YouTube_50Gray.png",
  };

  const LABELS: Record<SocialPlatform, string> = {
    instagram: "Instagram",
    tiktok: "TikTok",
    facebook: "Facebook",
    x: "X",
    reddit: "Reddit",
    youtube: "YouTube",
  };

  // ✅ Real profile URLs
  const HREFS: Record<SocialPlatform, string> = {
    facebook: "https://www.facebook.com/prrrfct",
    instagram:
      "https://www.instagram.com/gingerbread.prrrfct?igsh=ZThudmkwcXNjYXk2&utm_source=qr",
    tiktok: "https://www.tiktok.com/@gingerbread.prrrft?_r=1&_t=ZT-92NywUFjkCc",
    x: "#x",
    reddit: "#reddit",
    youtube: "#youtube",
  };

  const VISIBLE_PLATFORMS: SocialPlatform[] = [
    "instagram",
    "tiktok",
    "facebook",
  ];

  return (
    <div className={`flex items-center gap-md ${className}`}>
      {VISIBLE_PLATFORMS.map((platform) => (
        <a
          key={platform}
          href={HREFS[platform]}
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
