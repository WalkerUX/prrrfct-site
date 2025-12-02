import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CareSection } from '@/components/sections/CareSection';
import { EarlyAccessSection } from '@/components/sections/EarlyAccessSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { HeroVideoSection } from '@/components/sections/HeroVideoSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-section-primary flex flex-col">
      <section className="w-full max-w-page mx-auto px-page pb-3xl flex flex-col gap-xl lg:grid lg:grid-cols-12 lg:gap-x-3xl lg:items-start">
        {/* 1. MOBILE VIDEO (Visible only on Mobile) */}
        <HeroVideoSection variant="mobile" className="lg:hidden" />

        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col gap-xl lg:col-span-5">
          <HeroSection />

          {/* Early Access: stacked under hero on mobile */}
          <div className="lg:hidden">
            <EarlyAccessSection />
          </div>

          <CareSection />

          {/* Social Proof: stacked under Care on mobile */}
          <div className="lg:hidden pt-md">
            <SocialProofSection />
          </div>
        </div>

        {/* --- RIGHT COLUMN (Desktop Only) --- */}
        <div className="hidden lg:flex lg:col-span-7 flex-col gap-xl lg:sticky lg:top-xl">
          {/* Desktop Video */}
          <HeroVideoSection variant="desktop" />

          {/* Email Card (Aligns Left/Start) */}
          <EarlyAccessSection />

          {/* Social Proof (Aligns Right/End via component logic) */}
          <SocialProofSection />
        </div>
      </section>
    </div>
  );
}
