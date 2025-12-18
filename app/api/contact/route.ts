import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContact } from "@/lib/validate";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function env(name: string) {
  const v = process.env[name];
  return v && v.trim().length ? v : undefined;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const v = validateContact(body ?? {});
  if (!v.ok) {
    return NextResponse.json(
      { ok: false, message: "Invalid input", errors: v.errors },
      { status: 400 }
    );
  }

  const SMTP_HOST = env("SMTP_HOST");
  const SMTP_PORT = env("SMTP_PORT");
  const SMTP_USER = env("SMTP_USER");
  const SMTP_PASS = env("SMTP_PASS");
  const SMTP_FROM = env("SMTP_FROM") || SMTP_USER;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `New enquiry from ${v.cleaned.name}`;
  const safeCompany = v.cleaned.company ? `\nCompany: ${v.cleaned.company}` : "";
  const text = `Name: ${v.cleaned.name}\nEmail: ${v.cleaned.email}${safeCompany}\n\nMessage:\n${v.cleaned.message}`;

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: site.email,
      replyTo: v.cleaned.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { ok: false, message: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
