import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error("Missing MailerLite env vars");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
        status: "active",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data?.error ?? "Subscription failed." }, { status: 400 });
    }

    return NextResponse.json({ message: "You're subscribed to early access!" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
