import { useMutation } from "@tanstack/react-query";
import { habitsService } from "../../model/routes";
import { isAxiosError } from "axios";

export const useStatus = (id: number) => {
  return useMutation({
    mutationKey: ["status"],
    mutationFn: ({ status }: { status: "success" | "failed" }) =>
      habitsService.changeStatus(id, status),
  });
};

export const useTimerLeft = () => {
  return useMutation({
    mutationKey: ["timerLeft"],
    mutationFn: ({ id, remain }: { id: number; remain: number }) =>
      habitsService.changeRemain(id, remain),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);
      }
    },
  });
};

export const useAddCompleteDate = () => {
  return useMutation({
    mutationKey: ["addCompleteDate"],
    mutationFn: ({ id, date }: { id: number; date: string }) =>
      habitsService.addCompleteDate(id, date),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);
      }
    },
  });
};
