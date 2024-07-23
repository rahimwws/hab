import { dateFormat } from "@/entities/habit/model/date/dateFormat";
import { Habit } from "@/entities/habit/model/types/Habit";

export const statusForToday = (
  habit: Habit
): "success" | "doing" | "failed" => {
  const today = dateFormat(new Date());

  const todayStatus = habit.completedDays.find((day) => day.date === today);

  if (todayStatus) {
    return todayStatus.status as "success" | "failed";
  } else {
    return "doing";
  }
};
