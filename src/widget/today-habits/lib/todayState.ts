import { create } from "zustand";

interface TodayDayState {
    todayDate: Date;
    changeDate: (newDate: Date) => void;
}

export const useTodayDay = create<TodayDayState>((set) => ({
    todayDate: new Date(),
    changeDate: (newDate: Date) => set({ todayDate: newDate }),
}));