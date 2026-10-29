"use client";

import { useState } from "react";

export function useFormSubmit() {
  const [status, setStatus] = useState("idle");

  async function submit(url, data) {
    setStatus("submitting");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        setStatus("success");
        return { success: true };
      }
      setStatus("error");
      return { success: false, message: result.message };
    } catch {
      setStatus("error");
      return { success: false };
    }
  }

  return { status, submit, setStatus };
}
