"use client";

import { FormEvent, useId, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

type SubscribeResponse = {
  ok?: boolean;
  message?: string;
  error?: string;
};

export function EmailSignupForm() {
  const inputId = useId();
  const messageId = useId();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const isLoading = status === "loading";
  const isError = status === "error";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter a valid email address (for example, name@example.com).");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data: SubscribeResponse = await response
        .json()
        .catch(() => ({} as SubscribeResponse));

      if (!response.ok || data?.ok === false) {
        setStatus("error");
        setMessage(
          data?.message ||
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
      className="w-full space-y-xs"
    >
      <div className="flex flex-col gap-xs md:flex-row md:items-center">
        <div className="flex-1 w-full">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>

          <Input
            id={inputId}
            name="email"
            type="email"
            inputMode="email"
            enterKeyHint="done"
            autoComplete="email"
            required
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={isError}
            aria-describedby={message ? messageId : undefined}
            disabled={isLoading}
            error={isError ? " " : undefined} // triggers border-error without showing extra text
          />
        </div>

        <div className="w-full md:w-auto">
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            {isLoading ? "Joining…" : "Join now"}
          </Button>
        </div>
      </div>

      <div
        id={messageId}
        aria-live={isError ? "assertive" : "polite"}
        role={isError ? "alert" : "status"}
      >
        {message && (
          <Text as="p" variant="body-md" color={isError ? "error" : "success"}>
            {message}
          </Text>
        )}
      </div>
    </form>
  );
}

export default EmailSignupForm;
