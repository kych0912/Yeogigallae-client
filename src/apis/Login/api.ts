import { api } from "../Axios";


export const sendAuthCodeToServer = async (code: string) => {
    try {
        const response = await api.get(`/api/auth/login/kakao?code=${code}&redirectUri=${import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI}`);

        return response.data;
    } catch (error) {
        console.error("Error sending auth code to server:", error);
        throw new Error("Failed to send auth code to server");
    }
};