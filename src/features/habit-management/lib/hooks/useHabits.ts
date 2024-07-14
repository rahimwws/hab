import { useQuery } from "@tanstack/react-query";
import { habitsService } from "../../model/routes";

export const useHabits = () => {
  return useQuery({
    queryKey: ["habits"],
    queryFn: () => habitsService.habits().then((data) => data.data),
  });
};
