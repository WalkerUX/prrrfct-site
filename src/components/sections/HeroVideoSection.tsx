"use client";

import React, { useEffect, useMemo, useState } from "react";

interface HeroVideoSectionProps {
  variant: "mobile" | "desktop";
  className?: string;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  variant,
  className = "",
}) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(Boolean(mq.matches));
    update();

    // Modern browsers
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    // Older Safari (deprecated API)
    const mqAny = mq as unknown as {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    mqAny.addListener?.(update);
    return () => mqAny.removeListener?.(update);
  }, []);

  const config = {
    mobile: {
      // INTENTIONALLY BROKEN PATH — forces poster fallback
      video: "/video/hero-video-mobile-v2_DOES_NOT_EXIST.mp4",
      poster: "/images/hero-poster-mobile-v2.jpg",
      aspect: "aspect-[4/3]",
    },
    desktop: {
      // INTENTIONALLY BROKEN PATH — forces poster fallback
      video: "/video/hero-video-desktop_DOES_NOT_EXIST.mp4",
      poster: "/images/hero-poster-desktop.jpg",
      aspect: "aspect-square",
    },
  } as const;

  const { video, poster, aspect } = config[variant];

  const videoBehavior = useMemo(() => {
    if (reduceMotion) {
      return {
        autoPlay: false,
        controls: true,
      };
    }

    // Autoplay allowed, but video will fail → poster remains
    return {
      autoPlay: true,
      controls: false,
    };
  }, [reduceMotion]);

  return (
    <div
      className={`w-full overflow-hidden rounded-lg bg-container-secondary shadow-sm ${aspect} ${className}`}
    >
      <video
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="w-full h-full object-cover"
        aria-hidden="true"
        tabIndex={-1}
        {...videoBehavior}
      >
        <source src={video} type="video/mp4" />
        {/* Fallback content if <video> fails */}
        <img src={poster} alt="" className="w-full h-full object-cover" />
      </video>
    </div>
  );
};
