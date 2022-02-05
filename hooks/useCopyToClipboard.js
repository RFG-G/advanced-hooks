import { useState, useEffect } from "react";

export const useCopyToClipboard = (resetTime) => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    let timerId;
    if (resetTime && copied) {
      tmerId = setTimeout(() => {
        setCopied(false);
      }, resetTime);
    }
    return () => clearTimeout(timerId);
  }, []);

  return [copied, copy];
};
