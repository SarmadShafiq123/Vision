"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import {
  TextField,
  TextAreaField,
  HoneypotField,
} from "@/components/forms/form-field";
import { SubmitButton } from "@/components/forms/submit-button";
import { contactSchema, contactDefaults } from "@/lib/schemas/contact";
import {
  HONEYPOT_FIELD_NAME,
  FORM_SUCCESS_MESSAGE,
  FORM_FAILURE_MESSAGE,
} from "@/constants/form";

const FIELD_PLACEHOLDERS = {
  name: "Your full name",
  email: "you@example.com",
  phone: "03xx xxxxxxx",
  subject: "What is this about?",
  message: "Tell us how we can help",
};

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaults,
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        toast.success(FORM_SUCCESS_MESSAGE);
        form.reset(contactDefaults);
      } else {
        toast.error(result.message || FORM_FAILURE_MESSAGE);
      }
    } catch {
      toast.error(FORM_FAILURE_MESSAGE);
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <HoneypotField register={form.register} name={HONEYPOT_FIELD_NAME} />
        <TextField
          name="name"
          label="Your name"
          placeholder={FIELD_PLACEHOLDERS.name}
        />
        <TextField
          name="email"
          label="Email address"
          placeholder={FIELD_PLACEHOLDERS.email}
          type="email"
        />
        <TextField
          name="phone"
          label="Phone (optional)"
          placeholder={FIELD_PLACEHOLDERS.phone}
          type="tel"
        />
        <TextField
          name="subject"
          label="Subject"
          placeholder={FIELD_PLACEHOLDERS.subject}
        />
        <TextAreaField
          name="message"
          label="Message"
          placeholder={FIELD_PLACEHOLDERS.message}
          rows={5}
        />
        <SubmitButton isSubmitting={isSubmitting}>
          Send message
        </SubmitButton>
      </form>
    </Form>
  );
}
