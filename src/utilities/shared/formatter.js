import { abbreviateNumber } from "js-abbreviation-number";

// Func: Formats the number: 241374 as "241K"
export const countFormatter = (countNum) => {
  const abbreviatedCount = countNum
    ? abbreviateNumber(countNum, 0, {
        symbols: ["", "K", "M", "B", "t", "q", "Q"], // symbols for Thousands, Million, Billion and so on
      })
    : null;
  return abbreviatedCount;
};

export const publishedTimeLengthFormatter = (date) => {
  // date.
};
