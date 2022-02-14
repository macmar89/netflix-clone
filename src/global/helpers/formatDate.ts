export const getYear = (date: string): string => {
  const datePart = date?.split("-");
  return datePart &&  datePart[0];
};

export const convertMinutesToTime = (mins: number) => {
  const hours = Math.floor(mins / 60)
  const minutes = mins % 60
  return `${hours}h ${minutes}m `
}
