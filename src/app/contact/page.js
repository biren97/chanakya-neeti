export const metadata = {
  title: "Contact & Feedback",
  description: "Contact Chanakya Neeti: report a mistake in a shloka, suggest an improvement, or share your feedback.",
};

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Contact() {
  return (
    <div className="page prose" lang="en">
      <h1>Contact &amp; Feedback</h1>
      <p>
        Your feedback helps make this site better. If you find an error in a shloka, have a suggestion to improve a meaning, or
        want to share your own experience, please write to us.
      </p>
      {EMAIL ? (
        <p>
          <a className="btn primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Feedback on Chanakya Neeti site")}`}>
            Email us: {EMAIL}
          </a>
        </p>
      ) : (
        <p>The contact email will be added soon.</p>
      )}
      <h2>What you can write to us about</h2>
      <ul>
        <li>A spelling or ordering mistake in a shloka</li>
        <li>Suggestions to make a meaning or takeaway clearer</li>
        <li>A real-life experience related to a shloka</li>
        <li>A technical problem or a suggestion for the site</li>
      </ul>
    </div>
  );
}
