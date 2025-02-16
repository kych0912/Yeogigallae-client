import { create } from "zustand";

interface AuthState {
    email:string;
    nickname:string;
    profileImage:string;
    setProfile: (email:string,nickname:string,profileImage:string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    email: "",
    nickname: "",
    profileImage: "",
    setProfile: (email:string,nickname:string,profileImage:string) => set({ email, nickname, profileImage }),

    clearAuth: () => set({ email: "", nickname: "", profileImage: "" }),
}));
