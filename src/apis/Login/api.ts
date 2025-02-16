import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const sendAuthCodeToServer = async (code: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/auth/login/kakao?code=${code}&redirectUri=${import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI}`, {
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error sending auth code to server:", error);
        throw new Error("Failed to send auth code to server");
    }
};
