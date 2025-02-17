import { create } from "zustand";

export interface AuthState {
    userId:string;
    email:string;
    nickname:string;
    profileImage:string;
    setProfile: (
        userId:string,
        email:string,
        nickname:string,
        profileImage:string
    ) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    userId: "",
    email: "",
    nickname: "",
    profileImage: "",
    setProfile: (
        userId:string,
        email:string,
        nickname:string,
        profileImage:string
    ) => set({ userId, email, nickname, profileImage }),

    clearAuth: () => set({ email: "", nickname: "", profileImage: "" }),
}));
