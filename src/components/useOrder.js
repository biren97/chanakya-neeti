"use client";
import { useEffect, useState } from "react";

const key = (c) => `shuffle-order-${c}`;
const canonical = (n) => Array.from({ length: n }, (_, i) => i + 1);

export function readOrder(c, n) {
  try {
    const saved = JSON.parse(localStorage.getItem(key(c)) || "null");
    if (Array.isArray(saved) && saved.length === n) return saved;
  } catch {}
  return canonical(n);
}

export function shuffleOrder(c, n) {
  const a = canonical(n);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  try { localStorage.setItem(key(c), JSON.stringify(a)); } catch {}
  return a;
}

export function resetOrder(c) {
  try { localStorage.removeItem(key(c)); } catch {}
}

// Returns [order, setOrder]: array of sloka numbers (1-based) in reading order.
export function useOrder(c, n) {
  const [order, setOrder] = useState(canonical(n));
  useEffect(() => { setOrder(readOrder(c, n)); }, [c, n]);
  return [order, setOrder];
}
