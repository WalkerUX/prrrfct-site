import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { FooterLink } from '@/components/ui/FooterLink';
import { Text } from '@/components/ui/Text';

export const Footer = () => {
  return (
    <footer className="w-full bg-section-secondary border-t border-container-secondary">
      {/* SPACING (using only configured DS tokens)
          - Horizontal: px-page (var(--padding-page), responsive via globals.css)
          - Vertical: py-xl (24px) → md:py-2xl (32px)
          - Internal Gap: gap-xl (24px) → md:gap-2xl (32px)
      */}
      <div
        className="
          w-full max-w-page mx-auto
          flex flex-col items-center text-center
          lg:flex-row lg:justify-between lg:text-left
          px-page py-xl gap-xl
          md:py-2xl md:gap-2xl
        "
      >
        <div className="flex flex-col items-center gap-lg">
          <div className="w-[108px]">
            <Logo className="h-[63px] w-auto" />
          </div>
          <SocialIcons />
        </div>

        <div className="flex flex-col items-center lg:items-end gap-md">
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-xl gap-y-sm">
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Accessibility</FooterLink>
          </div>

          <Text
            variant="caption-md"
            color="tertiary"
            className="text-center lg:text-right"
          >
            © 2025 Prrrfct, LLC. All Rights Reserved. We respect your privacy. No
            tracking ads. No spam.
          </Text>
        </div>
      </div>
    </footer>
  );
};
