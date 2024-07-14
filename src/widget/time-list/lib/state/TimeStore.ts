import { create } from "zustand";


interface TimeStore {
    times: ["All", "Morning", "Afternoon", "Evening"];
    selectedTime: "All" | "Morning" | "Afternoon" | "Evening";
    setTime: (time: "All" | "Morning" | "Afternoon" | "Evening") => void;
}

export const useTimeStore = create<TimeStore>((set) => ({
    times: ["All", "Morning", "Afternoon", "Evening"],
    selectedTime: "All",
    setTime: (time) => set({ selectedTime: time })
}));








