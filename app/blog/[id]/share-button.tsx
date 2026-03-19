"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconShare, IconCheck } from "@tabler/icons-react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="outline"
      className="text-black cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? (
        <IconCheck className="mr-1 h-5 w-5" />
      ) : (
        <IconShare className="mr-1 h-5 w-5" />
      )}
      {copied ? "Copied!" : "Copy Link"}
    </Button>
  );
}
