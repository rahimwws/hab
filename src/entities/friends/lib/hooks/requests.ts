import { useMutation, useQuery } from "@tanstack/react-query";
import { FriendService } from "../../model/routes";
import { isAxiosError } from "axios";

export const useSearchFriends = () => {
  return useMutation({
    mutationKey: ["search-friends"],
    mutationFn: (username: string) =>
      FriendService.searchFriend(username).then((data) => data.data),
  });
};

export const useSendRequests = () => {
  return useMutation({
    mutationKey: ["send-requests"],
    mutationFn: (username: string) =>
      FriendService.sendRequests(username).then((data) => data.data),
  });
};

export const useGetRequests = () => {
  return useQuery({
    queryKey: ["requests"],
    queryFn: () => FriendService.getRequests().then((data) => data.data),
    throwOnError: (err) => {
      if (isAxiosError(err)) {
        console.log(err.message);
      }
      return false;
    },
  });
};

export const useAcceptRequests = () => {
  return useMutation({
    mutationKey: ["accept-requests"],
    mutationFn: (username: string) =>
      FriendService.acceptRequests(username).then((data) => data.data),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    },
  });
};
