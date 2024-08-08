import { Habit } from "@/entities/habit/model/types";

export type RootStackParamList = {
  Home: undefined;
  HabitDetail: { habit: Habit };
  Edit: { habit: Habit };
};
