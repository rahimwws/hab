import { Habit } from "@/entities/habit/model/types/habit";

export function subtractSecondsFromRemain(
  habit: Habit,
  remainOfTimer: number
): Habit {
  const seconds = habit.remain * 60;
  const updatedRemain = Math.max(seconds - remainOfTimer, 0);

  return { ...habit, remain: habit.remain - updatedRemain / 60 };
}
