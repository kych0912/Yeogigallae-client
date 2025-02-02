import { useAuthStore } from "./useAuthStore";
import { sendAuthCodeToServer } from "./api";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const handleKakaoLogin = async (code: string, navigate: Function) => {
    try {
        const { setAccessToken, setRefreshToken } = useAuthStore.getState();

        const response = await sendAuthCodeToServer(code);

        if (response.accessToken && response.refreshToken) {
            setAccessToken(response.accessToken);
            setRefreshToken(response.refreshToken);
            navigate("/");
        } else {
            navigate("/login", { replace: true });
        }
    } catch (error) {
        console.error("Login failed:", error);
        navigate("/login", { replace: true });
    }
};
