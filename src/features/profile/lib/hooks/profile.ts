import { useMutation, useQuery } from "@tanstack/react-query";
import { profile } from "../routes";
import { isAxiosError } from "axios";

export const useChangeAvatar = () => {
  return useMutation({
    mutationKey: ["change_avatar"],
    mutationFn: (uri: string) => profile.uploadAvatar(uri),
    onError: (err) => {
      if (isAxiosError(err)) {
        console.log(err.message);
      }
    },
  });
};
export const useGetUser = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => profile.getUser(),
  });
};
