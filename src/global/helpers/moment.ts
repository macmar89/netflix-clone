import moment from "moment";
moment.locale("sk");
moment.updateLocale("sk", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export const formatDate = (date: string): string => {
  const datePart = date?.split("-");
  return `${datePart[2]}. ${datePart[1]}. ${datePart[0]}`;
};

export const getYear = (date: string): string => {
  const datePart = date?.split("-");
  return datePart &&  datePart[0];
};

export const convertMinutesToTime = (mins: number) => {
  const hours = Math.floor(mins / 60)
  const minutes = mins % 60
  return `${hours}h ${minutes}m `
}
