import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { saveToken } from "@/shared/api/token/storage";
export const useRegister = (
  email: string,
  password: string,
  username: string,
  name: string
) => {
  const [errorMessage, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: () => auth.register(email, password, username, name),
    onSuccess: async (data) => {
      console.log(data.data);
      await saveToken(data.data.accessToken);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      } else {
        setError(error.message);
      }
    },
  });

  return { ...mutation, errorMessage };
};
