import "server-only";
import { serverEnv, isGoogleFormConfigured } from "@/config/env";

export function submitToGoogleForm(payload) {
  if (!isGoogleFormConfigured()) {
    return Promise.resolve({ ok: false, reason: "not_configured" });
  }

  const formData = new URLSearchParams();
  formData.append(serverEnv.googleFormEntryStudentName, payload.studentName);
  formData.append(serverEnv.googleFormEntryParentName, payload.parentName);
  formData.append(serverEnv.googleFormEntryPhone, payload.phone);
  formData.append(serverEnv.googleFormEntryClass, payload.classApplying);

  if (payload.message) {
    formData.append(serverEnv.googleFormEntryMessage, payload.message);
  }

  return fetch(serverEnv.googleFormActionUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
    redirect: "manual",
  })
    .then((response) => {
      const acceptableStatus = [200, 302];
      const isOpaqueRedirect =
        response.type === "opaqueredirect" || response.status === 0;
      if (acceptableStatus.includes(response.status) || isOpaqueRedirect) {
        return { ok: true };
      }
      return { ok: false, reason: "bad_status", status: response.status };
    })
    .catch(() => {
      return { ok: true };
    });
}
