"use client";
import Link from "next/link";
import { useState } from "react";
import { useOrder, shuffleOrder, resetOrder } from "./useOrder";

export default function ChapterIndex({ chapter, previews }) {
  const total = previews.length;
  const [order, setOrder] = useOrder(chapter, total);
  const isShuffled = order.some((v, i) => v !== i + 1);
  const [first] = order;

  return (
    <>
      <div className="toolbar">
        <Link className="btn primary" href={`/chapter/${chapter}/sloka/${first}/`}>पढ़ना शुरू करें →</Link>
        <button className="btn" onClick={() => setOrder(shuffleOrder(chapter, total))}>🔀 श्लोक फेंटें</button>
        {isShuffled && (
          <button className="btn ghost" onClick={() => { resetOrder(chapter); setOrder(order.map((_, i) => i + 1)); }}>
            क्रम वापस करें
          </button>
        )}
      </div>
      {isShuffled && <p className="note">श्लोक अभी फेंटे हुए क्रम में हैं। अगला/पिछला बटन इसी क्रम को मानेगा।</p>}
      <ol className="sloka-list">
        {order.map((n, idx) => (
          <li key={n}>
            <Link href={`/chapter/${chapter}/sloka/${n}/`} className="sloka-card">
              <span className="sc-num">{isShuffled ? idx + 1 : n}</span>
              <span className="sc-text"><strong>{previews[n - 1].title}</strong><em>{previews[n - 1].line}</em></span>
              {isShuffled && <span className="sc-orig">श्लोक {n}</span>}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
