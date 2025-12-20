import React from "react";

type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "x"
  | "reddit"
  | "youtube";

export const SocialLinksColor = () => {
  const ICONS: Record<SocialPlatform, string> = {
    instagram: "/icons/Instagram.png",
    tiktok: "/icons/TikTok.png",
    facebook: "/icons/Facebook.png",
    x: "/icons/X.png",
    reddit: "/icons/Reddit.png",
    youtube: "/icons/YouTube.png",
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
    <div className="flex items-center gap-xs">
      {VISIBLE_PLATFORMS.map((platform) => (
        <a
          key={platform}
          href={HREFS[platform]}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block w-xl h-xl
            min-w-[24px] min-h-[24px]
            flex-shrink-0
            hover:opacity-80
            transition-opacity duration-200
          "
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
