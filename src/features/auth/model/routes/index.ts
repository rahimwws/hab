import { clientWithoutToken } from "@/shared/api";

export const auth = {
  async register(
    email: string,
    password: string,
    username: string,
    name: string
  ) {
    return await clientWithoutToken.post("/auth/register/", {
      email,
      password,
      username,
      name,
    });
  },
  async login(username: string, password: string) {
    return await clientWithoutToken.post("/auth/login/", {
      username,
      password,
    });
  },
  async checkUsername(username: string) {
    return await clientWithoutToken.post("/auth/check/username", {
      username,
    });
  },
};
