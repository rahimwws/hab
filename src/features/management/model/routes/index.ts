import { CreateHabit, EditHabit, Habit } from "@/entities/habit/model/types";
import { User } from "@/features/profile/model/types/User";
import { client } from "@/shared/api";

export const habitsService = {
  async habits() {
    return await client.get("/habits");
  },
  async createHabit(habit: CreateHabit) {
    return await client.post("/habits/create/", {
      ...habit,
    });
  },
  async deleteHabit(id: number) {
    return await client.delete(`/habits/remove/${id}`);
  },
  async editHabit(habit: EditHabit, id: number) {
    return await client.post(`/habits/edit/${id}`, {
      ...habit,
    });
  },
  async changeStatus(id: number, status: string) {
    return await client.put(`/habits/change/${id}/status`, {
      status,
    });
  },

  async changeRemain(id: number, left: number) {
    return await client.put(`/habits/change/${id}/left`, {
      left,
    });
  },

  async addCompleteDate(id: number, date: string) {
    return await client.put(`/habits/change/${id}/add-day/`, {
      date,
    });
  },
  async addFriend(id: number, username: string) {
    return await client.post(`/habits/relations/add/${id}`, {
      username,
    });
  },
  async getFriend(id: number) {
    return await client.get<User[]>(`/habits/friends/${id}`);
  },
};
