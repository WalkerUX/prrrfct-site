"use client";

import React from "react";
import { Text } from "@/components/ui/Text";
import { EmailSignupForm } from "@/components/EmailSignupForm";

export const EmailCard = () => {
  return (
    <div className="w-full lg:w-[596px]">
      <div
        className={`
          w-full
          flex flex-col items-center text-center
          bg-section-primary
          rounded-lg
          border-container-sm border-container-primary
          py-xl px-2xl
          shadow-sm
        `}
      >
        {/* Headline */}
        <div className="mb-lg">
          <Text as="h3" variant="h3" className="font-bold">
            Get early access—and extra treats!
          </Text>
        </div>

        {/* Form row: email + button */}
        <div className="w-full mb-lg">
          <EmailSignupForm />
        </div>

        {/* Subtext */}
        <div className="space-y-xs">
          <Text
            variant="body-md"
            className="font-bold lg:text-h6"
          >
            Prrrfct is launching in December 2025.
          </Text>
          <Text variant="body-md">
            Sign up early to reserve your spot—and get{" "}
            <span className="font-bold">5 free Cat toys and treats</span> when
            we go live!
          </Text>
        </div>
      </div>
    </div>
  );
};
