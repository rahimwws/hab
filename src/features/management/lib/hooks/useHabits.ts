import { useQuery } from "@tanstack/react-query";
import { habitsService } from "../../model/routes";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";

export const useHabits = () => {
  return useQuery({
    queryKey: ["habits"],
    queryFn: () => habitsService.habits().then((data) => data.data),
  });
};
