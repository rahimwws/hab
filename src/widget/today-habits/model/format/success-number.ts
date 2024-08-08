import { Habit } from "@/entities/habit/model/types";

export const countSuccessHabits = (habits: Habit[]): number => {
  return habits.reduce((count, habit) => {
    if (habit.status === "Success") {
      return count + 1;
    }
    return count;
  }, 0);
};
