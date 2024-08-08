import { useMutation, useQuery } from "@tanstack/react-query";
import { habitsService } from "../../model/routes";
import { CreateHabit, EditHabit, Habit } from "@/entities/habit/model/types";
import { isAxiosError } from "axios";

export const useHabits = () => {
  return useQuery({
    queryKey: ["habits"],
    queryFn: () => habitsService.habits().then((data) => data.data),
  });
};
export const useFriendFromHabit = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["friends-from-habit"],
    queryFn: () => habitsService.getFriend(id).then((data) => data.data),
  });
};
export const createHabit = () => {
  return useMutation({
    mutationKey: ["createHabit"],
    mutationFn: ({ habit }: { habit: CreateHabit }) =>
      habitsService.createHabit(habit),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);
      }
    },
  });
};
export const editHabit = () => {
  return useMutation({
    mutationKey: ["editHabit"],
    mutationFn: ({ habit, id }: { habit: EditHabit; id: number }) =>
      habitsService.editHabit(habit, id),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);
      }
    },
  });
};

export const deleteHabit = () => {
  return useMutation({
    mutationKey: ["deleteHabit"],
    mutationFn: ({ id }: { id: number }) => habitsService.deleteHabit(id),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);
      }
    },
  });
};
