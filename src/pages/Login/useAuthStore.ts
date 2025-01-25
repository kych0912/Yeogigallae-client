import { create } from "zustand";

interface AuthState {
    accessToken: string | null;
    lastProvider: string | null;
    setAccessToken: (token: string, provider: string) => void;
    clearAccessToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    lastProvider: null,
    setAccessToken: (token, provider) => set({ accessToken: token, lastProvider: provider }),
    clearAccessToken: () => set({ accessToken: null, lastProvider: null }),
}));
