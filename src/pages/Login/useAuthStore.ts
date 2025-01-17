import { create } from "zustand"; // 명명된 내보내기로 수정

interface AuthState {
    accessToken: string | null;
    lastProvider: string | null; // 새로운 필드 추가
    setAccessToken: (token: string, provider: string) => void;
    clearAccessToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    lastProvider: null,
    setAccessToken: (token, provider) => set({ accessToken: token, lastProvider: provider }),
    clearAccessToken: () => set({ accessToken: null, lastProvider: null }),
}));
