import { create } from "zustand";

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    setAccessToken: (token: string) => void;
    setRefreshToken: (token: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    refreshToken: null,

    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),

    clearAuth: () => set({ accessToken: null, refreshToken: null }),
}));
