import { create } from "zustand";

export interface UserState {
  user : {
    name: string,
    email: string,
    password: string
  }
}

export const useUser = create((set) => ({
  user: {
    name: "Master",
    email: "master@mail.com",
    password: "pass"
  }
}))
