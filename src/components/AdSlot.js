"use client";
import { useEffect } from "react";

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

// Renders a responsive Google AdSense unit once NEXT_PUBLIC_ADSENSE_CLIENT is set.
// Without it, nothing is shown, so the site stays clean until ads are approved.
export default function AdSlot({ className = "" }) {
  useEffect(() => {
    if (!CLIENT) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);

  if (!CLIENT || !SLOT) return null;
  return (
    <div className={`ad-wrap ${className}`} aria-label="विज्ञापन">
      <span className="ad-label">विज्ञापन</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT}
        data-ad-slot={SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
