import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters, getChapter } from "@/data/chapters";
import Pager from "@/components/Pager";
import AdSlot from "@/components/AdSlot";
import { SITE_URL } from "@/data/site";
import { getExtra } from "@/data/extras";
import SlokaArt, { paletteFor } from "@/components/SlokaArt";
import { ExampleImage, ExampleText } from "@/components/ExampleBox";

export const dynamicParams = false;
export const generateStaticParams = () =>
  chapters.flatMap((c) => c.slokas.map((_, i) => ({ c: String(c.number), n: String(i + 1) })));

export async function generateMetadata({ params }) {
  const { c, n } = await params;
  const s = getChapter(c)?.slokas[Number(n) - 1];
  return {
    title: s ? `${s.title} (अध्याय ${c}, श्लोक ${n})` : `अध्याय ${c}, श्लोक ${n}`,
    description: s ? `${s.lesson} ${s.meaning[0]}`.slice(0, 160) : undefined,
    alternates: { canonical: `/chapter/${c}/sloka/${n}/` },
    openGraph: { type: "article", locale: "hi_IN", title: s ? s.title : undefined, description: s ? s.lesson : undefined },
  };
}

export default async function SlokaPage({ params }) {
  const { c, n } = await params;
  const chapter = getChapter(c);
  const s = chapter?.slokas[Number(n) - 1];
  if (!s) notFound();
  const total = chapter.slokas.length;
  const extra = getExtra(c, n);

  const url = `${SITE_URL}/chapter/${c}/sloka/${n}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: s.title, description: s.lesson, inLanguage: "hi", mainEntityOfPage: url, isPartOf: { "@type": "WebSite", name: "चाणक्य नीति", url: SITE_URL } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "मुख्य पृष्ठ", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: `अध्याय ${c}`, item: `${SITE_URL}/chapter/${c}/` },
        { "@type": "ListItem", position: 3, name: `श्लोक ${n}`, item: url },
      ] },
    ],
  };

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="crumbs">
        <Link href="/">मुख्य पृष्ठ</Link> / <Link href={`/chapter/${c}/`}>अध्याय {c}</Link> / श्लोक {n}
      </p>
      <h1 className="sloka-title">{s.title}</h1>

      <figure className="sloka-box" style={{ background: `linear-gradient(145deg, ${paletteFor(Number(c))[0]}, ${paletteFor(Number(c))[1]})` }}>
        <SlokaArt chapter={Number(c)} n={Number(n)} />
        <span className="badge">अध्याय {c} · श्लोक {n}</span>
        <blockquote lang="sa">
          {s.sloka.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </blockquote>
      </figure>

      <section className="card">
        <h2>अर्थ</h2>
        {s.meaning.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <ExampleImage extra={extra} />

      <section className="card lesson">
        <h2>सार</h2>
        <p>{s.lesson}</p>
      </section>

      <ExampleText extra={extra} />

      <AdSlot />
      <Pager chapter={Number(c)} total={total} current={Number(n)} />
    </div>
  );
}
