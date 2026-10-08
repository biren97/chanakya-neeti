"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const SITE_NAME = "चाणक्य नीति";

const Chevron = ({ up }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={up ? "M3 10l5-5 5 5" : "M3 6l5 5 5-5"} />
  </svg>
);

// chapters: [{ number, titles: ["विनम्रता से आरंभ", ...] }] (titles only, to keep the client bundle small)
export default function Sidebar({ chapters }) {
  const pathname = usePathname() || "/";
  const match = pathname.match(/^\/chapter\/(\d+)(?:\/sloka\/(\d+))?/);
  const activeChapter = match ? Number(match[1]) : null;
  const activeSloka = match && match[2] ? Number(match[2]) : null;

  const [open, setOpen] = useState(activeChapter);
  const [drawer, setDrawer] = useState(false);
  
  useEffect(() => { setOpen(activeChapter); setDrawer(false); }, [pathname, activeChapter]);

  return (
    <>
      <header className="topbar">
        <button className="burger" onClick={() => setDrawer(true)} aria-label="मेनू खोलें">☰</button>
        <Link href="/" className="topbar-title">{SITE_NAME}</Link>
      </header>
      {drawer && <div className="scrim" onClick={() => setDrawer(false)} />}
      <aside className={`sidebar ${drawer ? "show" : ""}`}>
        <Link href="/" className="brand">
          <span className="brand-mark">॥</span>
          <span>
            <strong>{SITE_NAME}</strong>
            <small>सूत्र, अर्थ और सार</small>
          </span>
        </Link>
        <nav aria-label="अध्याय">
          {chapters.map((ch) => {
            const isOpen = open === ch.number;
            return (
              <div key={ch.number} className="nav-chapter">
                <div className={`nav-row ${activeChapter === ch.number ? "active" : ""}`}>
                  <Link href={`/chapter/${ch.number}/`} className="nav-link">
                    <span className="num">{ch.number}</span> अध्याय {ch.number}
                  </Link>
                  <button
                    className="chev"
                    onClick={() => setOpen(isOpen ? null : ch.number)}
                    aria-expanded={isOpen}
                    aria-label={`अध्याय ${ch.number} के श्लोक`}
                  >
                    <Chevron up={isOpen} />
                  </button>
                </div>
                {isOpen && (
                  <div className="sub">
                    {ch.titles.length === 0 && <span className="soon">जल्द आ रहा है</span>}
                    {ch.titles.map((t, i) => (
                      <Link
                        key={i}
                        title={`श्लोक ${i + 1}: ${t}`}
                        href={`/chapter/${ch.number}/sloka/${i + 1}/`}
                        className={`sub-link ${activeChapter === ch.number && activeSloka === i + 1 ? "active" : ""}`}
                      >
                        श्लोक {i + 1}: {t}
                      </Link>
                    ))}
                                      </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="side-foot">
          <Link href="/about/">परिचय</Link> · <Link href="/privacy/">गोपनीयता</Link> · <Link href="/disclaimer/">अस्वीकरण</Link>
        </div>
      </aside>
    </>
  );
}
