export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Chanakya Neeti: educational content, historical context of the shlokas, interpretations and third-party ads.",
};

export default function Disclaimer() {
  return (
    <div className="page prose" lang="en">
      <h1>Disclaimer</h1>
      <p>
        The content on this site is for general information and educational purposes only. It is not a substitute for legal,
        financial, medical or any other professional advice.
      </p>
      <p>
        The shlokas come from an ancient text and reflect the social thinking of their time. Some of the ideas do not match today&apos;s
        values. We present them in their historical context, not as an endorsement.
      </p>
      <p>
        The meanings and takeaways are this site&apos;s own interpretations. A shloka can be understood in more than one way, and we do
        not guarantee that an interpretation is complete or free of errors.
      </p>
      <p>
        Third-party advertisements may be shown on this site. We are not responsible for the content or claims of advertisers.
      </p>
    </div>
  );
}
