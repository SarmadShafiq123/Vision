import { z } from "zod";

export const registrationSchema = z.object({
  studentName: z
    .string()
    .min(2, "Student name must be at least 2 characters.")
    .max(100, "Student name is too long."),
  parentName: z
    .string()
    .min(2, "Parent or guardian name must be at least 2 characters.")
    .max(100, "Parent or guardian name is too long."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),
  classApplying: z.string().min(1, "Please select a class."),
  message: z.string().max(1000, "Message is too long.").optional().or(z.literal("")),
  company: z.string().optional(),
});

export const registrationDefaults = {
  studentName: "",
  parentName: "",
  phone: "",
  classApplying: "",
  message: "",
  company: "",
};
