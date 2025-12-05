// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = body?.email?.trim?.();

    if (!email) {
      return NextResponse.json(
        {
          ok: false,
          step: "validate-input",
          error: "Email is required",
          receivedBody: body,
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    // 🔍 Don't expose the real key; just whether it exists
    const hasKey = Boolean(apiKey && apiKey.length > 10);
    console.log("[subscribe] MAILERLITE_API_KEY present?", hasKey);

    if (!hasKey) {
      return NextResponse.json(
        {
          ok: false,
          step: "read-env",
          error: "MAILERLITE_API_KEY is missing or too short in this environment",
        },
        { status: 500 }
      );
    }

    const payload = {
      email,
      // If you’re using groups, uncomment and add yours:
      // groups: ["YOUR_GROUP_ID"],
    };

    console.log("[subscribe] Sending to MailerLite", {
      endpoint: MAILERLITE_ENDPOINT,
      email,
    });

    const mlResponse = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const mlJson = await mlResponse.json().catch(() => ({}));

    console.log("[subscribe] MailerLite status", mlResponse.status);

    if (!mlResponse.ok) {
      console.error("[subscribe] MailerLite error", {
        status: mlResponse.status,
        body: mlJson,
      });

      return NextResponse.json(
        {
          ok: false,
          step: "mailerLite",
          status: mlResponse.status,
          error: "MailerLite request failed",
          mailerLiteBody: mlJson,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        step: "done",
        status: mlResponse.status,
        mailerLiteBody: mlJson,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[subscribe] Uncaught error", err);

    return NextResponse.json(
      {
        ok: false,
        step: "catch-block",
        error: err?.message || "Unexpected server error",
      },
      { status: 500 }
    );
  }
}
