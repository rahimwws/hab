import { create } from "zustand";

interface AuthState {
  email: string;
  username: string;
  name: string;
  password: string;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  username: "",
  name: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
  setName: (name) => set({ name }),
}));
