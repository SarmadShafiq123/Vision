import "server-only";
import nodemailer from "nodemailer";
import { serverEnv, isSmtpConfigured } from "@/config/env";

export function sendContactEmail(payload) {
  if (!isSmtpConfigured()) {
    return Promise.resolve({ ok: false, reason: "not_configured" });
  }

  const transporter = nodemailer.createTransport({
    host: serverEnv.smtpHost,
    port: Number(serverEnv.smtpPort),
    secure: Number(serverEnv.smtpPort) === 465,
    auth: {
      user: serverEnv.smtpUser,
      pass: serverEnv.smtpPass,
    },
  });

  const mailOptions = {
    from: serverEnv.smtpUser,
    to: serverEnv.contactReceiverEmail,
    replyTo: payload.email,
    subject: `Website enquiry: ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => ({ ok: true }))
    .catch((error) => ({
      ok: false,
      reason: "smtp_error",
      message: error.message,
    }));
}
