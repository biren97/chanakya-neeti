// Your own content for each shloka: a real-life example and/or a photo.
// Key format: "<chapter>-<shloka>"  e.g. "1-3" = chapter 1, shloka 3.
// Entries are optional. A shloka with no entry simply shows no example box.
//
//   "1-3": {
//     example: [                      // one string per paragraph
//       "Your real-life story or example, paragraph 1.",
//       "Paragraph 2 (optional).",
//     ],
//     author: "Your name (optional)", // shown under the example
//     image: "/images/1-3.webp",      // file inside /public/images (see README)
//     alt: "Short description of the image",
//     caption: "Optional caption",
//     width: 1200, height: 800,       // the image's size; avoids layout jump
//   },
//
// An entry can have only `example`, or only `image`, or both.

const extras = {
  "1-3": {
    example: [
      // one string per paragraph
      "मैं यह सब किसी स्वार्थ से नहीं, लोगों की भलाई की इच्छा से कह रहा हूँ।",
      "वह लगभग हर परिस्थिति को पढ़ सकता है।",
    ],
    author: "Chanakya", // shown under the example
    image: "/images/1-3.webp", // file inside /public/images (see README)
    alt: "Short description of the image",
    caption: "Chanakya, the author of Arthashastra",
    width: 1200,
    height: 800, // the image's size; avoids layout jump
  },
};

export const getExtra = (chapter, sloka) =>
  extras[`${chapter}-${sloka}`] || null;
