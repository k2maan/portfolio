"use client";

import { useState } from "react";
import { MailIcon } from "@/components/icons";

// Clicking copies the address instead of opening a mail app, and confirms it for a moment.
// "text" is the link in the hero's credit strip, whose label turns into the confirmation. "large" is
// the address set huge in Contact; it keeps the address in place and confirms beside it.
type Props = { email: string; variant?: "text" | "large" };

export default function CopyEmail({ email, variant = "text" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older browsers and non-secure pages: copy through a hidden text field instead
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (variant === "large") {
    return (
      <span className="contact-copy">
        <button type="button" className="contact-email" onClick={copy} title="Copy email address">
          {email}
        </button>
        <span className="caption copy-status" aria-live="polite">
          {copied ? "Copied to clipboard" : ""}
        </span>
      </span>
    );
  }

  return (
    <button type="button" className="text-link" onClick={copy} title={`Copy ${email}`}>
      <MailIcon />
      <span aria-live="polite">{copied ? "Copied to clipboard" : email}</span>
    </button>
  );
}
