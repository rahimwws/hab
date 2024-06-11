import { Habit } from "@/src/entities/habit/lib/types/habit";
import { create } from "zustand";


interface HabitState {
    habit: Habit | false;
    addHabit: (habit: Habit) => void;
    updateCounter: (step: number) => any;
    removedHabit: () => void;
}

export const useCounterState = create<HabitState>((set) => ({
    habit: false,
    updateCounter: (step) => set((state) => {
        if (state.habit) {
            const updatedRemain = Math.max(state.habit.remain - step, 0);
            return { habit: { ...state.habit, remain: updatedRemain } };
        }
        return state;
    }),
    addHabit: (habit: Habit) => set(() => ({ habit })),
    removedHabit: () => set(() => ({ habit: false }))
}));