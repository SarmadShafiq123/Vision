export const publicEnv = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923126174004",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@visionacademy.com",
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "",
};

export const serverEnv = {
  googleFormActionUrl: process.env.GOOGLE_FORM_ACTION_URL || "",
  googleFormEntryStudentName: process.env.GOOGLE_FORM_ENTRY_STUDENT_NAME || "",
  googleFormEntryParentName: process.env.GOOGLE_FORM_ENTRY_PARENT_NAME || "",
  googleFormEntryPhone: process.env.GOOGLE_FORM_ENTRY_PHONE || "",
  googleFormEntryClass: process.env.GOOGLE_FORM_ENTRY_CLASS || "",
  googleFormEntryMessage: process.env.GOOGLE_FORM_ENTRY_MESSAGE || "",
  smtpHost: process.env.SMTP_HOST || "",
  smtpPort: process.env.SMTP_PORT || "587",
  smtpUser: process.env.SMTP_USER || "",
  smtpPass: process.env.SMTP_PASS || "",
  contactReceiverEmail: process.env.CONTACT_RECEIVER_EMAIL || "",
};

export function isGoogleFormConfigured() {
  return Boolean(
    serverEnv.googleFormActionUrl &&
      serverEnv.googleFormEntryStudentName &&
      serverEnv.googleFormEntryParentName &&
      serverEnv.googleFormEntryPhone &&
      serverEnv.googleFormEntryClass,
  );
}

export function isSmtpConfigured() {
  return Boolean(
    serverEnv.smtpHost &&
      serverEnv.smtpUser &&
      serverEnv.smtpPass &&
      serverEnv.contactReceiverEmail,
  );
}
