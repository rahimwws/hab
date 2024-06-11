import { create } from "zustand";
import { Habit } from "../types/habit";
import { LightHeptic } from "@/src/shared/lib/heptics/LightHeptic";

interface HabitState {
    habits: Habit[];
    addHabit: (habit: Habit) => void;
    updateHabit: (updatedHabit: Habit) => void;
    deleteHabit: (index: number) => void;
    failedItem: (item: Habit) => void;
    successItem: (item: Habit) => void;
}

export const useHabitStore = create<HabitState>((set) => ({
    habits: [
        {
            name: 'Daily Reading',
            status: 'Success',
            remain: 10,
            total: 10,
            type: 'counter',
            emoji: '📚',
            descriptions: 'Reading is the key to knowledge and growth.',
            friends: [{ name: "", avatar: "" }],
            startDate: new Date('2024-06-01'),
            endDate: new Date('2024-06-31')
        },
        {
            name: 'Morning Jogging',
            status: 'default',
            remain: 15,
            type: "counter",
            total: 20,
            emoji: '🏃‍♂️',
            descriptions: 'Go for a jog to start your day with energy!',
            friends: 'private',
            measure: "times",
            startDate: new Date('2024-06-01'),
            endDate: new Date('2024-06-31')
        },
        {
            name: 'Meditation Before Bed',
            status: 'Skipped',
            remain: 20,
            total: 50,
            type: 'timer',
            emoji: '🧘‍♂️',
            descriptions: 'Relax and calm your mind before sleep.',
            friends: [{ name: "", avatar: "" }],
            startDate: new Date('2023-03-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Evening Walk',
            status: 'Success',
            remain: 5,
            total: 5,
            type: 'counter',
            emoji: '🚶‍♂️',
            descriptions: 'Take a walk to relax in the evening.',
            friends: 'private',
            measure: 'kilometers',
            startDate: new Date('2023-01-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Yoga Session',
            status: 'default',
            remain: 8,
            total: 10,
            type: 'timer',
            emoji: '🧘‍♀️',
            descriptions: 'Practice yoga to enhance flexibility and relaxation.',
            friends: [{ name: "Alice", avatar: "alice_avatar.png" }],
            startDate: new Date('2024-06-01'),
            endDate: new Date('2024-06-31')
        },
        {
            name: 'Cooking Class',
            status: 'Skipped',
            remain: 0,
            total: 5,
            type: 'counter',
            emoji: '👨‍🍳',
            descriptions: 'Learn new recipes and improve your cooking skills.',
            friends: [{ name: "Bob", avatar: "bob_avatar.png" }],
            startDate: new Date('2023-05-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Guitar Practice',
            status: 'Success',
            remain: 30,
            total: 30,
            type: 'timer',
            emoji: '🎸',
            descriptions: 'Practice playing guitar to improve your skills.',
            friends: 'private',
            measure: 'minutes',
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Language Learning',
            status: 'default',
            remain: 12,
            total: 20,
            type: 'counter',
            emoji: '🗣️',
            descriptions: 'Spend time learning a new language.',
            friends: [{ name: "Charlie", avatar: "charlie_avatar.png" }],
            startDate: new Date('2023-07-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Running',
            status: 'Skipped',
            remain: 7,
            total: 15,
            type: 'counter',
            emoji: '🏃‍♀️',
            descriptions: 'Run to stay fit and healthy.',
            friends: 'private',
            measure: 'miles',
            startDate: new Date('2023-08-01'),
            endDate: new Date('2023-12-31')
        },
        {
            name: 'Reading News',
            status: 'default',
            remain: 3,
            total: 10,
            type: 'counter',
            emoji: '📰',
            descriptions: 'Stay informed by reading the news daily.',
            friends: [{ name: "Dave", avatar: "dave_avatar.png" }],
            startDate: new Date('2023-09-01'),
            endDate: new Date('2023-12-31')
        }
    ],
    addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
    updateHabit: (updatedHabit) => set((state) => {
        const updatedHabits = state.habits.map(habit => {
            if (habit.name === updatedHabit.name) {
                return updatedHabit;
            }
            return habit;
        });
        return { habits: updatedHabits };
    }),
    deleteHabit: (index) => set((state) => {
        const habits = [...state.habits];
        habits.splice(index, 1);
        return { habits };
    }),
    failedItem: (item) => set((state) => {
        const updatedHabit: Habit = { ...item, status: "Skipped" };
        LightHeptic();
        return { habits: state.habits.map(habit => habit.name === updatedHabit.name ? updatedHabit : habit) };
    }),
    successItem: (item) => set((state) => {
        const updatedHabit: Habit = { ...item, status: "Success" };
        LightHeptic();
        return { habits: state.habits.map(habit => habit.name === updatedHabit.name ? updatedHabit : habit) };
    })
}));