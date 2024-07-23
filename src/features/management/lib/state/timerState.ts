import { dateFormat } from "@/entities/habit/model/date/dateFormat";
import { Habit } from "@/entities/habit/model/types/Habit";
import { create } from "zustand";
interface TimerState {
  habit: Habit | false;
  addHabitTime: (habit: Habit) => void;
  successTime: () => void;
}
export const useTimerState = create<TimerState>((set) => ({
  habit: false,
  successTime: () =>
    set((state) => ({
      ...state,
      habit: state.habit
        ? {
            ...state.habit,
            remain: 0,
            completedDays: [
              ...state.habit.completedDays,
              { date: dateFormat(new Date()), status: "success" },
            ],
          }
        : state.habit,
    })),
  addHabitTime: (habit: Habit) => set(() => ({ habit })),
}));
