"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORM_SUBMITTING_LABEL } from "@/constants/form";

export function SubmitButton({ children, isSubmitting, disabled }) {
  return (
    <Button
      type="submit"
      disabled={disabled || isSubmitting}
      className="h-11 w-full"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {FORM_SUBMITTING_LABEL}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
