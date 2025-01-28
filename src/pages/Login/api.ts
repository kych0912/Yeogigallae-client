import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendAuthCodeToServer = async (code: string) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login/kakao`,
            { code },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, // 쿠키를 포함하도록 설정
            }
        );

        return response.data; // 서버 응답 데이터 반환
    } catch (error) {
        console.error("Error sending auth code to server:", error);
        throw new Error("Failed to send auth code to server");
    }
};
