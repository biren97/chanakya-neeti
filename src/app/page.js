import Link from "next/link";
import { chapters } from "@/data/chapters";
import AdSlot from "@/components/AdSlot";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">आचार्य चाणक्य</p>
        <h1>चाणक्य नीति</h1>
        <p className="lead">
          जीवन, धन, मित्रता और व्यवहार की सदियों पुरानी सीख। मूल श्लोक, सरल हिंदी में अर्थ और एक पंक्ति का सार, अध्याय-दर-अध्याय।
        </p>
        <Link className="btn primary" href="/chapter/1/">अध्याय 1 से शुरू करें →</Link>
      </section>

      <AdSlot />

      <h2 className="section-title">सभी अध्याय</h2>
      <div className="chapter-grid">
        {chapters.map((ch) => (
          <Link key={ch.number} href={`/chapter/${ch.number}/`} className="chapter-card">
            <span className="cc-num">{ch.number}</span>
            <span className="cc-title">अध्याय {ch.number}</span>
            <span className="cc-meta">{ch.slokas.length ? `${ch.slokas.length} श्लोक` : "जल्द आ रहा है"}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
