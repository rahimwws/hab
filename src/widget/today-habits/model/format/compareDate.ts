import { formatDateSheet } from "@/features/calendar/model/format/formatDate";

export const compareDate = (title: string | false, todayDate: Date): string => {
  const adjustedDate = new Date(todayDate);
  //  TODO: Change logic for date
  return formatDateSheet(adjustedDate.toISOString());
};
