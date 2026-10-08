import Link from "next/link";

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong>Chanakya Neeti</strong>
          <p>Original shlokas with simple Hindi meanings and takeaways. The shlokas are in the public domain; the meanings and takeaways are original to this site.</p>
        </div>
        <div>
          <strong>Site</strong>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/contact/">Contact &amp; feedback</Link></li>
          </ul>
        </div>
        <div>
          <strong>Legal</strong>
          <ul>
            <li><Link href="/privacy/">Privacy policy</Link></li>
            <li><Link href="/disclaimer/">Disclaimer</Link></li>
            {EMAIL && <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}
          </ul>
        </div>
      </div>
      <p className="copyright">© {YEAR} Chanakya Neeti. All rights reserved. Please do not copy or republish the meanings, takeaways or examples without permission.</p>
    </footer>
  );
}
