import { notFound } from "next/navigation";
import { chapters, getChapter } from "@/data/chapters";
import ChapterIndex from "@/components/ChapterIndex";
import Pager from "@/components/Pager";
import AdSlot from "@/components/AdSlot";

export const dynamicParams = false;
export const generateStaticParams = () => chapters.map((c) => ({ c: String(c.number) }));

export async function generateMetadata({ params }) {
  const { c } = await params;
  return {
    title: `अध्याय ${c}: श्लोक सूची`,
    description: `चाणक्य नीति अध्याय ${c} के सभी श्लोकों की सूची, सरल हिंदी अर्थ और सार सहित।`,
    alternates: { canonical: `/chapter/${c}/` },
    robots: getChapter(c)?.slokas.length ? undefined : { index: false },
  };
}

export default async function ChapterPage({ params }) {
  const { c } = await params;
  const chapter = getChapter(c);
  if (!chapter) notFound();
  const total = chapter.slokas.length;
  const previews = chapter.slokas.map((s) => ({
    title: s.title,
    line: s.sloka.split("\n")[0].replace(/\s*।$/, "") + " …",
  }));

  return (
    <div className="page">
      <p className="eyebrow">पेज 1 / {total + 1}</p>
      <h1>अध्याय {chapter.number}</h1>
      {total === 0 ? (
        <p className="lead">इस अध्याय पर काम चल रहा है। जल्द ही यहाँ श्लोक और उनके अर्थ उपलब्ध होंगे।</p>
      ) : (
        <>
          <p className="lead">इस अध्याय में {total} श्लोक हैं। किसी भी श्लोक पर क्लिक करें।</p>
          <ChapterIndex chapter={chapter.number} previews={previews} />
          <AdSlot />
          <Pager chapter={chapter.number} total={total} current={0} />
        </>
      )}
    </div>
  );
}
