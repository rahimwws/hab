import colors, { ColorOption } from "@/shared/lib/theme/colors";
import { EmojiType } from "rn-emoji-keyboard";
import { create } from "zustand";
import { EditHabit, Habit } from "@/entities/habit/model/types";

interface EditHabitState {
  habit: EditHabit;
  setName: (name: string) => void;
  setDescription: (text: string) => void;
  setTotal: (total: number) => void;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  setDate: (date: string) => void;
  setEmoji: (emoji: EmojiType) => void;
  setColor: (color: ColorOption) => void;
  setMeasure: (measure: string) => void;
  setPublic: (item: boolean) => void;
  setRelation: (relation: number) => void;
  resetHabit: () => void;
}
const initialHabitState: EditHabit = {
  name: "",
  total: 0,
  emoji: "",
  description: "",
  measure: "Choose",
  startDate: new Date(),
  endDate: new Date(),
  time: "9:31",
  color: "gray100",
  public: false,
  relations: [],
};
const useEditHabitStore = create<EditHabitState>((set) => ({
  habit: initialHabitState,
  setTotal: (total) => set((state) => ({ habit: { ...state.habit, total } })),
  setStartDate: (startDate) =>
    set((state) => ({ habit: { ...state.habit, startDate } })),
  setEndDate: (endDate) =>
    set((state) => ({ habit: { ...state.habit, endDate } })),
  setDate: (date) =>
    set((state) => ({ habit: { ...state.habit, time: date } })),
  setEmoji: (emoji) =>
    set((state) => ({ habit: { ...state.habit, emoji: emoji.emoji } })),
  setColor: (color) =>
    set((state) => ({ habit: { ...state.habit, color: color.code } })),
  setMeasure: (measure) =>
    set((state) => ({ habit: { ...state.habit, measure } })),
  setName: (name) => set((state) => ({ habit: { ...state.habit, name } })),
  setDescription: (description) =>
    set((state) => ({ habit: { ...state.habit, description } })),
  setPublic: (item) =>
    set((state) => ({ habit: { ...state.habit, public: item } })),
  setRelation: (item) =>
    set((state) => ({
      habit: { ...state.habit, relations: [...state.habit.relations, item] },
    })),
  resetHabit: () => set({ habit: initialHabitState }),
}));

export default useEditHabitStore;
