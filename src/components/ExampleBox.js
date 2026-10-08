// Owner's own photo / real-life example for a shloka (data/extras.js).

// Photo: shown in a fixed-height frame so portrait and landscape images both look tidy.
// The whole picture is visible (never cropped); empty space is filled with a blurred copy of it.
export function ExampleImage({ extra }) {
  if (!extra?.image) return null;
  return (
    <figure className="photo">
      <div className="photo-frame">
        <img className="photo-bg" src={extra.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img className="photo-main" src={extra.image} alt={extra.alt || ""} loading="lazy" decoding="async" />
      </div>
      {extra.caption && <figcaption>{extra.caption}</figcaption>}
    </figure>
  );
}

export function ExampleText({ extra }) {
  if (!extra?.example) return null;
  const paras = Array.isArray(extra.example) ? extra.example : [extra.example];
  return (
    <section className="card example">
      <h2>जीवन से एक उदाहरण</h2>
      {paras.map((p, i) => <p key={i}>{p}</p>)}
      {extra.author && <p className="by">— {extra.author}</p>}
    </section>
  );
}
