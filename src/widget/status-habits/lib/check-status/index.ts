import { Habit } from "@/entities/habit/model/types";
import { statusForToday } from "@/shared/lib/complete";
import colors from "@/shared/lib/theme/colors";

interface sections {
  title: string;
  color: keyof typeof colors;
  status: "success" | "failed" | "doing";
}
export const checkStatus = (habits: Habit[]): sections[] => {
  const sections: sections[] = [];
  const counter = { success: 0, failed: 0, doing: 0 };
  habits.forEach((habit) => {
    if (statusForToday(habit) === "success" && !counter.success) {
      sections.push({
        title: "Completed",
        color: "success",
        status: "success",
      });
      counter.success++;
    }
    if (statusForToday(habit) === "failed" && !counter.failed) {
      sections.push({
        title: "Failed",
        color: "error",
        status: "failed",
      });
      counter.failed++;
    }
  });
  return sections;
};
