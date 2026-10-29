"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import {
  TextField,
  TextAreaField,
  SelectField,
  HoneypotField,
} from "@/components/forms/form-field";
import { SubmitButton } from "@/components/forms/submit-button";
import { registrationSchema, registrationDefaults } from "@/lib/schemas/registration";
import {
  HONEYPOT_FIELD_NAME,
  FORM_SUCCESS_MESSAGE,
  FORM_FAILURE_MESSAGE,
} from "@/constants/form";
import { classOptions } from "@/data/academics";

const FIELD_PLACEHOLDERS = {
  studentName: "Student full name",
  parentName: "Parent or guardian full name",
  phone: "03xx xxxxxxx",
  message: "Anything you would like us to know",
};

export function RegistrationForm() {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: registrationDefaults,
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        toast.success(FORM_SUCCESS_MESSAGE);
        form.reset(registrationDefaults);
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
          name="studentName"
          label="Student name"
          placeholder={FIELD_PLACEHOLDERS.studentName}
        />
        <TextField
          name="parentName"
          label="Parent or guardian name"
          placeholder={FIELD_PLACEHOLDERS.parentName}
        />
        <TextField
          name="phone"
          label="Phone number"
          placeholder={FIELD_PLACEHOLDERS.phone}
          type="tel"
        />
        <SelectField
          name="classApplying"
          label="Class applying for"
          placeholder="Select a class"
          options={classOptions}
        />
        <TextAreaField
          name="message"
          label="Message (optional)"
          placeholder={FIELD_PLACEHOLDERS.message}
          rows={3}
        />
        <SubmitButton isSubmitting={isSubmitting}>
          Submit registration
        </SubmitButton>
      </form>
    </Form>
  );
}
