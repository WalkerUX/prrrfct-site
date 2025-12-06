// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

// Simple email format check
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // Be defensive: if body isn't valid JSON, fall back to {}
    const body = await req.json().catch(() => ({} as any));

    const rawEmail = body?.email;
    const trimmedEmail =
      typeof rawEmail === "string" ? rawEmail.trim() : "";

    // 1) Missing email
    if (!trimmedEmail) {
      return NextResponse.json(
        { ok: false, message: "Email is required." },
        { status: 400 }
      );
    }

    // 2) Badly formatted email
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Please enter a valid email address (for example, name@example.com).",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey || apiKey.length < 10) {
      console.error(
        "[subscribe] MAILERLITE_API_KEY missing or invalid in this environment"
      );
      return NextResponse.json(
        {
          ok: false,
          message:
            "Subscription is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    const payload = {
      email: trimmedEmail,
      // groups: ["YOUR_GROUP_ID"], // optional
    };

    const mlResponse = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    let mlJson: any = null;
    try {
      mlJson = await mlResponse.json();
    } catch {
      mlJson = null;
    }

    if (!mlResponse.ok) {
      console.error("[subscribe] MailerLite error", {
        status: mlResponse.status,
        body: mlJson,
      });

      return NextResponse.json(
        {
          ok: false,
          message:
            "We couldn’t add your email right now. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log("[subscribe] MailerLite success", {
      status: mlResponse.status,
      email: trimmedEmail,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks for signing up! You’re on the list.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[subscribe] Uncaught error", err);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
