import { create } from "zustand";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

type AuthStore = {
  user: User | null;
  accessToken: string;
  setAccessToken: (token: string) => void;
  setUser: (user: User) => void;
  clearStore: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: "",
  setAccessToken: (accessToken) =>
    set((state) => ({
      ...state,
      accessToken,
    })),
  setUser: (user) =>
    set((state) => ({
      ...state,
      user,
    })),
  clearStore: () =>
    set({
      user: null,
      accessToken: "",
    }),
}));
