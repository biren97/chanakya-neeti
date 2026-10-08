import Link from "next/link";

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Main menu">
        <Link href="/">Home</Link>
        <Link href="/about/">About</Link>
        <Link href="/contact/">Contact</Link>
        {EMAIL && <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Feedback on Chanakya Neeti site")}`}>Feedback</a>}
      </nav>
    </header>
  );
}
