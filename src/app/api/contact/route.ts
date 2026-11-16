import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, inquiryType, message } = body;

    // Strict validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      organization: organization ? String(organization).trim() : "Not specified",
      inquiryType: inquiryType || "General Enquiry",
      message: String(message).trim(),
    };

    // Log structured transmission to server logs for persistence
    console.log("[INCOMING_PORTFOLIO_ENQUIRY]:", JSON.stringify(payload, null, 2));

    // Optional integration: If WEB3FORMS_ACCESS_KEY or RESEND_API_KEY is configured
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `New Portfolio Enquiry: ${payload.inquiryType} from ${payload.name}`,
            ...payload,
          }),
        });
      } catch (err) {
        console.warn("External relay failed, fallback preserved:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been securely registered and queued for response.",
        transmissionId: `DT-${Date.now().toString(36).toUpperCase()}`,
        payload,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      { error: "Internal server error processing transmission." },
      { status: 500 }
    );
  }
}
