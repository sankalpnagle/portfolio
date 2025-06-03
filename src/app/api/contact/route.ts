import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EmailRequest = {
  to: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  const body: EmailRequest = await req.json();

  const { to, subject, message } = body;

  if (!to || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Next App" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html: `<div><p>${message}</p></div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error.message);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
