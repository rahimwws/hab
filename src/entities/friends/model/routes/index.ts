import { User } from "@/features/profile/model/types/User";
import { client } from "@/shared/api";

export const FriendService = {
  async getFriends() {
    return await client.get<User[]>("/friends/");
  },

  async searchFriend(username: string) {
    return await client.post<User[]>("/friends/search", {
      username,
    });
  },

  async sendRequests(username: string) {
    return await client.post(`/friends/request/`, {
      username,
    });
  },

  async getRequests() {
    return await client.get<string[]>(`/friends/requests/`);
  },

  async acceptRequests(username: string) {
    return await client.post(`/friends/accept/`, {
      username,
    });
  },
  async getOneFriend(username: string) {
    return await client.get<User>(`/friends/${username}`);
  },
};
