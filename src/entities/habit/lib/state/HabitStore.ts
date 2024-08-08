import { create } from "zustand";
import { Habit } from "../../model/types";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";
import { dateFormat } from "../../model/date/dateFormat";

interface HabitState {
  habits: Habit[] | null;
  addHabit: (habit: Habit) => void;
  updateHabit: (updatedHabit: Habit) => void;
  deleteHabit: (index: number) => void;
  updateAllHabits: (habits: Habit[]) => void;
  failedItem: (item: Habit) => void;
  successItem: (item: Habit) => void;
}

export const useHabitStore = create<HabitState>((set, get) => ({
  habits: null,
  updateAllHabits: (habits) => {
    const currentHabits = get().habits;
    const habitsChanged =
      JSON.stringify(currentHabits) !== JSON.stringify(habits);
    if (habitsChanged) {
      set({ habits });
    }
  },
  addHabit: (habit) =>
    set((state) => ({
      habits: state.habits ? [...state.habits, habit] : [habit],
    })),
  updateHabit: (updatedHabit) =>
    set((state) => {
      if (!state.habits) return state;
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
      if (!state.habits) return state;
      const habits = [...state.habits];
      habits.splice(index, 1);
      return { habits };
    }),
  failedItem: (item) =>
    set((state) => {
      if (!state.habits) return state;
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
          habit.id === updatedHabit.id ? updatedHabit : habit
        ),
      };
    }),
  successItem: (item) =>
    set((state) => {
      if (!state.habits) return state;
      const updatedHabit: Habit = {
        ...item,
        remain: 0,
        completedDays: [
          ...item.completedDays,
          { date: dateFormat(new Date()), status: "success" },
        ],
      };
      LightHeptic();
      return {
        habits: state.habits.map((habit) =>
          habit.id === updatedHabit.id ? updatedHabit : habit
        ),
      };
    }),
}));
