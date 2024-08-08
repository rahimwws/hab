import { Habit } from "@/entities/habit/model/types";
import { User } from "@/features/profile/model/types/User";

export interface Journey {
  id: number;

  name: string;

  description: string;

  users: User[];

  requiredDays: number;
  habit: Habit;
}
