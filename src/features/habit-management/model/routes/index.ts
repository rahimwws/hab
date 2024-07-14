import { client } from "@/shared/api";

export const habitsService = {
  async habits() {
    return await client.get("/habits");
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
};
