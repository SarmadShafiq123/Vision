import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/schemas/registration";
import { HONEYPOT_FIELD_NAME } from "@/constants/form";
import { submitToGoogleForm } from "@/lib/services/google-form";
import { isGoogleFormConfigured } from "@/config/env";

const SUCCESS_MESSAGE = "Registration received. We will be in touch shortly.";
const HONEYPOT_RESPONSE = { ok: true, message: "Thank you." };
const VALIDATION_ERROR = {
  ok: false,
  message: "Please check the form for errors and try again.",
};
const NOT_CONFIGURED_MESSAGE =
  "Registration is not available right now. Please contact us on WhatsApp instead.";
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
    const parsed = registrationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(VALIDATION_ERROR, { status: 400 });
    }

    const data = parsed.data;

    if (data[HONEYPOT_FIELD_NAME]) {
      return NextResponse.json(HONEYPOT_RESPONSE);
    }

    if (!isGoogleFormConfigured()) {
      return NextResponse.json(
        { ok: false, message: NOT_CONFIGURED_MESSAGE },
        { status: 503 },
      );
    }

    const result = await submitToGoogleForm(data);

    if (result.ok) {
      return NextResponse.json({ ok: true, message: SUCCESS_MESSAGE });
    }

    return NextResponse.json(SERVICE_ERROR, { status: 502 });
  } catch {
    return NextResponse.json(INTERNAL_ERROR, { status: 500 });
  }
}
