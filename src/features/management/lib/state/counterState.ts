import { Habit } from "@/entities/habit/model/types";
import { create } from "zustand";
import { useStatus } from "../hooks/mutation";

interface HabitState {
  habit: Habit | false;
  addHabit: (habit: Habit) => void;
  updateCounter: (step: number) => any;
  removedHabit: () => void;
}

export const useCounterState = create<HabitState>((set) => ({
  habit: false,
  updateCounter: (step) =>
    set((state) => {
      if (state.habit) {
        const updatedRemain = Math.max(state.habit.remain - step, 0);
        if (updatedRemain === 0) {
        }
        return { habit: { ...state.habit, remain: updatedRemain } };
      }
      return state;
    }),
  addHabit: (habit: Habit) => set(() => ({ habit })),
  removedHabit: () => set(() => ({ habit: false })),
}));
