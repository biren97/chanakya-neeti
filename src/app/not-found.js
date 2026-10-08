import Link from "next/link";

export const metadata = { title: "पृष्ठ नहीं मिला", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="page">
      <h1>पृष्ठ नहीं मिला</h1>
      <p className="lead">जो पृष्ठ आप खोज रहे हैं वह मौजूद नहीं है।</p>
      <Link className="btn primary" href="/">मुख्य पृष्ठ पर जाएँ</Link>
    </div>
  );
}
