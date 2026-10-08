export const metadata = {
  title: "About",
  description: "About Chanakya Neeti: original shlokas with simple Hindi meanings and takeaways, and how the content on this site is prepared.",
};

export default function About() {
  return (
    <div className="page prose" lang="en">
      <h1>About this site</h1>
      <p>
        This site is an effort to make the teachings of Acharya Chanakya easy to read in simple Hindi. Every shloka comes with its
        meaning and a one-line takeaway.
      </p>
      <h2>How the content is prepared</h2>
      <ul>
        <li>The original Sanskrit shlokas are about 2,300 years old and are in the public domain.</li>
        <li>The meanings and takeaways are written fresh for this site. They are not copied or reworded from any published book&apos;s commentary.</li>
        <li>For study, you can shuffle the shlokas of a chapter and read them in a different order.</li>
      </ul>
      <h2>Corrections and feedback</h2>
      <p>
        If you notice a mistake in a shloka or a meaning, or have a suggestion, please get in touch on the{" "}
        <a href="/contact/">Contact page</a>.
      </p>
    </div>
  );
}
