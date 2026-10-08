import ch1 from "./ch1";
import ch2 from "./ch2";
import ch3 from "./ch3";
import ch4 from "./ch4";
import ch5 from "./ch5";
import ch6 from "./ch6";
import ch7 from "./ch7";
import ch8 from "./ch8";
import ch9 from "./ch9";
import ch10 from "./ch10";
import ch11 from "./ch11";
import ch12 from "./ch12";
import ch13 from "./ch13";
import ch14 from "./ch14";
import ch15 from "./ch15";

// Add chapter data files (ch16.js, ch17.js) and register them here.
const slokasByChapter = { 1: ch1, 2: ch2, 3: ch3, 4: ch4, 5: ch5, 6: ch6, 7: ch7, 8: ch8,
  9: ch9, 10: ch10, 11: ch11, 12: ch12, 13: ch13, 14: ch14, 15: ch15 };

export const SITE_NAME = "चाणक्य नीति";

// Only chapters that have shlokas are listed; register ch16/ch17 above when ready and they appear automatically.
export const chapters = Object.entries(slokasByChapter)
  .filter(([, slokas]) => slokas.length > 0)
  .map(([number, slokas]) => ({ number: Number(number), slokas }))
  .sort((a, b) => a.number - b.number);

export const getChapter = (n) => chapters.find((c) => c.number === Number(n));

// "राजनीति : जग कल्याण के लिए" -> "जग कल्याण के लिए"
export const shortTitle = (title) => title.split(" : ").slice(1).join(" : ") || title;
