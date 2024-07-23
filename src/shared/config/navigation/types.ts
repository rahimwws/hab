import { Habit } from "@/entities/habit/model/types/Habit";

export type RootStackParamList = {
  Home: undefined;
  HabitDetail: { habit: Habit };
};
