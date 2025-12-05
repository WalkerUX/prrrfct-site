"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const isLoading = status === "loading";
  const isError = status === "error";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data?.error ||
            "We couldn’t add your email right now. Please try again."
        );
        return;
      }

      setStatus("success");
      setMessage(
        data?.message ||
          "Thanks! You’re on the early access list. We’ll email you before Prrrfct launches."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong while connecting to the server. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Sign up for Prrrfct early access"
      noValidate
      className="w-full space-y-xs" // DS spacing token
    >
      {/* Email + button row */}
      <div className="flex flex-col gap-xs md:flex-row md:items-center">
        {/* Email field */}
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={isError ? "true" : "false"}
            aria-describedby="email-signup-message"
          />
        </div>

        {/* Primary CTA */}
        <div className="mt-xs md:mt-0 md:ml-xs">
          <Button
            type="submit"
            variant="primary" // Prrrfct DS primary style
            disabled={isLoading}
          >
            {isLoading ? "Joining…" : "Join now"}
          </Button>
        </div>
      </div>

      {/* A11y live region for success/error */}
      <div
        id="email-signup-message"
        aria-live="polite"
        className="min-h-[1.25rem]"
      >
        {message && (
          <Text
            as="p"
            variant="body-md"
            className={isError ? "text-status-error" : "text-status-success"}
          >
            {message}
          </Text>
        )}
      </div>
    </form>
  );
}

export default EmailSignupForm;
