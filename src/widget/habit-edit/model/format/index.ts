export const formatTime = (date: Date): string => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
  return `${hours}:${minutesStr}`;
};
export const formatEmojiName = (name?: string): string | undefined => {
  if (!name) return undefined;
  const words = name.split(/\s+/);
  const formattedName =
    words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
  return formattedName;
};

export const timeToDate = (time: string): Date => {
  const [hoursStr, minutesStr] = time.split(":");
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error("Invalid time format");
  }

  const now = new Date();
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(0);
  now.setMilliseconds(0);

  return now;
};
export const dateToTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};
