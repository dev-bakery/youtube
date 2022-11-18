import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

export function formatAgo(date) {
  const record = new Date(date);
  return timeAgo.format(record);
  // return timeAgo.format(date);
}
