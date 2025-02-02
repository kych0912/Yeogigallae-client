import axios from "axios";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendAuthCodeToServer = async (code: string) => {
    try {
        const response = await axios.post(
            `${VITE_API_BASE_URL}/login/kakao`,
            { code },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        return {
            accessToken: response.data["String accessToken"],
            refreshToken: response.data["String RefreshToken"],
        };
    } catch (error) {
        console.log("API_BASE_URL:", VITE_API_BASE_URL);

        console.error("Error sending auth code to server:", error);
        throw new Error("Failed to send auth code to server");
    }
};
