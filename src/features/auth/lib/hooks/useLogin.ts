import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
import { saveToken } from "@/shared/api/token/storage";
import { isAxiosError } from "axios";
export const useLogin = (username: string, password: string) => {
  return useMutation({
    mutationFn: () => auth.login(username, password),
    onSuccess: async (data) => {
      await saveToken(data.data.accessToken);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data?.message || error.message);
      } else {
        console.log(error.message);
      }
    },
  });
};
