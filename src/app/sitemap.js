import { chapters } from "@/data/chapters";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/about/", "/privacy/", "/disclaimer/"].map((p) => ({ url: `${SITE_URL}${p || "/"}`, lastModified: now }));
  for (const c of chapters) {
    if (!c.slokas.length) continue;
    pages.push({ url: `${SITE_URL}/chapter/${c.number}/`, lastModified: now });
    c.slokas.forEach((_, i) => pages.push({ url: `${SITE_URL}/chapter/${c.number}/sloka/${i + 1}/`, lastModified: now }));
  }
  return pages;
}
