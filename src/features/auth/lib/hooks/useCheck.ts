import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
export const useCheck = (username: string) => {
  return useMutation({
    mutationFn: () => auth.checkUsername(username),
  });
};
