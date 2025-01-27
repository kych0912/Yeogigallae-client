//import axios from "axios";

export const sendAuthCodeToServer = async (code: string): Promise<{ accessToken: string }> => {
    console.log("Mocking sendAuthCodeToServer response in development mode");
    return new Promise((resolve) => setTimeout(() => resolve({ accessToken: "mock_access_token" }), 500));

    /*
    const response = await axios.post<{ accessToken: string }>(
        "/login/kakao",
        { code },
        { withCredentials: true }
    );
    return response.data;
    */
};
