import { create } from "zustand";
import { Habit } from "../../model/types/habit";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";
import { dateFormat } from "../../model/date/dateFormat";

interface HabitState {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  updateHabit: (updatedHabit: Habit) => void;
  deleteHabit: (index: number) => void;
  updateAllHabits: (habits: Habit[]) => void;
  failedItem: (item: Habit) => void;
  successItem: (item: Habit) => void;
}
export const useHabitStore = create<HabitState>((set) => ({
  habits: [],
  updateAllHabits: (habits) => set({ habits }),
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  updateHabit: (updatedHabit) =>
    set((state) => {
      const updatedHabits = state.habits.map((habit) => {
        if (habit.id === updatedHabit.id) {
          return updatedHabit;
        }
        return habit;
      });
      return { habits: updatedHabits };
    }),
  deleteHabit: (index) =>
    set((state) => {
      const habits = [...state.habits];
      habits.splice(index, 1);
      return { habits };
    }),
  failedItem: (item) =>
    set((state) => {
      const updatedHabit: Habit = {
        ...item,
        completedDays: [
          ...item.completedDays,
          { date: dateFormat(new Date()), status: "failed" },
        ],
      };
      LightHeptic();
      return {
        habits: state.habits.map((habit) =>
          habit.name === updatedHabit.name ? updatedHabit : habit
        ),
      };
    }),
  successItem: (item) =>
    set((state) => {
      const updatedHabit: Habit = {
        ...item,
        completedDays: [
          ...item.completedDays,
          { date: dateFormat(new Date()), status: "success" },
        ],
      };
      LightHeptic();
      return {
        habits: state.habits.map((habit) =>
          habit.name === updatedHabit.name ? updatedHabit : habit
        ),
      };
    }),
}));
