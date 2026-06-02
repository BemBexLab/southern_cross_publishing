import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  service?: string;
};

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getBooleanEnv(value: string | undefined, fallback: boolean) {
  if (!value) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

export async function POST(request: Request) {
  const smtpHost =
    process.env.SMTP_HOST ?? "mail.southerncrosspublishing.com";
  const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "465", 10);
  const smtpSecure = getBooleanEnv(process.env.SMTP_SECURE, smtpPort === 465);
  const smtpUser =
    process.env.SMTP_USER ?? "info@southerncrosspublishing.com";
  const smtpPassword =
    process.env.SMTP_PASS ??
    process.env.SMTP_PASSWORD ??
    process.env.CONTACT_SMTP_PASSWORD ??
    "";
  const contactToEmail =
    process.env.EMAIL_TO ??
    process.env.CONTACT_TO_EMAIL ??
    "info@southerncrosspublishing.com";
  const contactFromEmail =
    process.env.EMAIL_FROM ?? smtpUser;

  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = getText(body.firstName);
    const lastName = getText(body.lastName);
    const combinedName = `${firstName} ${lastName}`.trim();
    const name = getText(body.name) || combinedName;
    const email = getText(body.email);
    const phone = getText(body.phone);
    const subject = getText(body.subject) || "New contact form submission";
    const message = getText(body.message);
    const service = getText(body.service);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!smtpPassword) {
      return NextResponse.json(
        { error: "SMTP credentials are not configured on the server." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const serviceLine = service ? `Service: ${service}\n` : "";
    const phoneLine = phone ? `Phone: ${phone}\n` : "";

    await transporter.sendMail({
      from: `"Southern Cross Publishing Contact Form" <${contactFromEmail}>`,
      to: contactToEmail,
      replyTo: email,
      subject,
      text:
        `New contact form submission\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        phoneLine +
        serviceLine +
        `\nMessage:\n${message}\n`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 },
    );
  }
}
