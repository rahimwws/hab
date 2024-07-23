import { useMutation, useQuery } from "@tanstack/react-query";
import { FriendService } from "../../model/routes";
import { User } from "@/features/profile/model/types/User";

export const useFriends = () => {
  return useQuery({
    queryKey: ["friends"],
    queryFn: () => FriendService.getFriends().then((data) => data.data),
  });
};

export const useOneFriend = (username: string) => {
  return useQuery<User, Error>({
    queryKey: ["one-friend", username],
    queryFn: () =>
      FriendService.getOneFriend(username).then((data) => data.data),
  });
};
