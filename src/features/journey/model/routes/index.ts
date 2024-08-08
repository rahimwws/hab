import { client } from "@/shared/api";
import { Journey } from "../types";
import { Habit } from "@/entities/habit/model/types";

export const journeyService = {
  async get() {
    return await client.get<Journey[]>("/journey");
  },
  async createHabit(id: number) {
    return await client.post<Habit>(`/journey/create/habit/${id}`);
  },
};
