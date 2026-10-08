// Decorative mandala drawn as inline SVG: ~1 KB, no image download, unique per shloka.
export const PALETTES = [
  ["#7a1f2b", "#4b0f1a"], ["#8a4b0f", "#4a2306"], ["#1f5a4a", "#0e3328"], ["#2a3f7a", "#141f48"],
  ["#6a2a7a", "#3a1448"], ["#7a5a1f", "#4a350e"], ["#1f6a7a", "#0e3a48"], ["#7a2a45", "#481428"],
];

export const paletteFor = (chapter) => PALETTES[(chapter - 1) % PALETTES.length];

export default function SlokaArt({ chapter, n }) {
  const petals = 6 + ((chapter * 3 + n) % 7) * 2; // 6..18
  const rings = 2 + (n % 3);
  const twist = (n * 17 + chapter * 29) % 360;
  const items = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  return (
    <svg className="sloka-art" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" transform={`rotate(${twist})`}>
        {Array.from({ length: rings }, (_, r) => (
          <circle key={r} r={30 + r * 22} opacity={0.5 - r * 0.1} />
        ))}
        {items.map((deg) => (
          <ellipse key={deg} cx="0" cy="-52" rx="9" ry="26" transform={`rotate(${deg})`} />
        ))}
        {items.map((deg) => (
          <circle key={`d${deg}`} cx="0" cy="-92" r="2.5" fill="currentColor" transform={`rotate(${deg + 180 / petals})`} />
        ))}
        <circle r="8" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}
