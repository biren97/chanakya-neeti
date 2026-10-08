"use client";
import Link from "next/link";
import { useOrder } from "./useOrder";

// Page 1 = chapter index, page k+1 = k-th sloka in reading order (canonical or shuffled).
export default function Pager({ chapter, total, current }) {
  const [order] = useOrder(chapter, total);
  const pos = current === 0 ? 0 : order.indexOf(current) + 1;
  const hrefFor = (p) => (p === 0 ? `/chapter/${chapter}/` : `/chapter/${chapter}/sloka/${order[p - 1]}/`);

  const pages = [];
  const last = total; // positions 0..total
  const from = Math.max(0, pos - 2);
  const to = Math.min(last, pos + 2);
  if (from > 0) pages.push(0, "…a");
  for (let p = from; p <= to; p++) pages.push(p);
  if (to < last) pages.push("…b", last);

  return (
    <nav className="pager" aria-label="Pagination">
      {pos > 0 ? <Link className="pg-btn" href={hrefFor(pos - 1)}>← Prev</Link> : <span className="pg-btn off">← Prev</span>}
      <div className="pg-nums">
        {pages.map((p) =>
          typeof p === "string" ? (
            <span key={p} className="pg-gap">…</span>
          ) : (
            <Link key={p} href={hrefFor(p)} className={`pg-num ${p === pos ? "cur" : ""}`}>{p + 1}</Link>
          )
        )}
      </div>
      {pos < last ? <Link className="pg-btn" href={hrefFor(pos + 1)}>Next →</Link> : <span className="pg-btn off">Next →</span>}
    </nav>
  );
}
