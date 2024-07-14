import { Habit } from "@/entities/habit/model/types/habit";

export const getSuccessCount = (habits: Habit[]): number => {
  return habits.filter((habit) => habit.status === "Success").length;
};

export const getFailedCount = (habits: Habit[]): number => {
  return habits.filter((habit) => habit.status === "Skipped").length;
};

export const getSuccessRate = (habits: Habit[]): string => {
  const total = habits.length;
  if (total === 0) return "0%";

  const successCount = getSuccessCount(habits);
  const successRate = (successCount / total) * 100;

  return `${successRate.toFixed(0)}%`;
};
