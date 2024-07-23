import { useMutation, useQuery } from "@tanstack/react-query";
import { journeyService } from "../../model/routes";
import { isAxiosError } from "axios";

export const useGetJourney = () => {
  return useQuery({
    queryKey: ["journey"],
    queryFn: () => journeyService.get().then((data) => data.data),
  });
};

export const useCreateHabit = () => {
  return useMutation({
    mutationKey: ["create-habit"],
    mutationFn: (id: number) =>
      journeyService.createHabit(id).then((data) => data.data),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    },
  });
};
