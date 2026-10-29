import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .max(20, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters.")
    .max(200, "Subject is too long."),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(2000, "Message is too long."),
  company: z.string().optional(),
});

export const contactDefaults = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
};
