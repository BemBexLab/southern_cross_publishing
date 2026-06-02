import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactSubmissionPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function getRequiredText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactSubmissionPayload;
    const firstName = getRequiredText(body.firstName);
    const lastName = getRequiredText(body.lastName);
    const email = getRequiredText(body.email);
    const phone = getRequiredText(body.phone);
    const message = getRequiredText(body.message);

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const emailTo = process.env.EMAIL_TO || "info@southerncrosspublishing.com";
    const emailFrom =
      process.env.EMAIL_FROM ||
      process.env.SMTP_USER ||
      "info@southerncrosspublishing.com";

    if (!transporter) {
      console.error("Contact route: SMTP configuration is incomplete.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `"Southern Cross Publishing Website" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: [
        "New message from Southern Cross Publishing contact form",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Message from Southern Cross Publishing Contact Form</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr />
        <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}
