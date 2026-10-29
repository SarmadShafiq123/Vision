import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { HONEYPOT_FIELD_NAME } from "@/constants/form";
import { sendContactEmail } from "@/lib/services/mailer";
import { isSmtpConfigured } from "@/config/env";

const SUCCESS_MESSAGE = "Message sent. We will respond within one working day.";
const HONEYPOT_RESPONSE = { ok: true, message: "Thank you." };
const VALIDATION_ERROR = {
  ok: false,
  message: "Please check the form for errors and try again.",
};
const NOT_CONFIGURED_MESSAGE =
  "Email is not available right now. Please contact us on WhatsApp instead.";
const SERVICE_ERROR = {
  ok: false,
  message: "Something went wrong. Please try again or reach us on WhatsApp.",
};
const INTERNAL_ERROR = {
  ok: false,
  message: "Something went wrong. Please try again later.",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(VALIDATION_ERROR, { status: 400 });
    }

    const data = parsed.data;

    if (data[HONEYPOT_FIELD_NAME]) {
      return NextResponse.json(HONEYPOT_RESPONSE);
    }

    if (!isSmtpConfigured()) {
      return NextResponse.json(
        { ok: false, message: NOT_CONFIGURED_MESSAGE },
        { status: 503 },
      );
    }

    const result = await sendContactEmail(data);

    if (result.ok) {
      return NextResponse.json({ ok: true, message: SUCCESS_MESSAGE });
    }

    return NextResponse.json(SERVICE_ERROR, { status: 502 });
  } catch {
    return NextResponse.json(INTERNAL_ERROR, { status: 500 });
  }
}
