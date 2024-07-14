import { Habit } from "@/entities/habit/model/types/habit";
import { formatDate } from "../../model/format/formatDate";
import colors from "@/shared/lib/theme/colors";

const getDatesBetween = (startDate: Date, endDate: Date): string[] => {
  const dates: string[] = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    dates.push(formatDate(currentDate.toISOString()));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export const getMarkedDates = (
  habits: Habit[]
): {
  [key: string]: {
    dots: { key: string; color: string; selectedDotColor: string }[];
  };
} => {
  const markedDates: {
    [key: string]: {
      dots: { key: string; color: string; selectedDotColor: string }[];
    };
  } = {};

  habits.forEach((habit) => {
    const { startDate, endDate, color } = habit;
    const dates = getDatesBetween(startDate, endDate);
    if (color) {
      dates.forEach((date) => {
        if (!markedDates[date]) {
          markedDates[date] = { dots: [] };
        }
        markedDates[date].dots.push({
          key: habit.name,
          color: colors[color],
          selectedDotColor: color,
        });
      });
    }
  });

  return markedDates;
};

export const getHabitsForDate = (date: string, habits: Habit[]): Habit[] => {
  return habits.filter((habit) => {
    const start = new Date(habit.startDate);
    const end = new Date(habit.endDate);
    const current = new Date(date);
    return current >= start && current <= end;
  });
};
