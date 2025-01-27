//import axios from "axios";

export const sendAuthCodeToServer = async (data: { code: string; provider: string }): Promise<{ accessToken: string }> => {
    console.log("Mocking sendAuthCodeToServer response in development mode");
    return new Promise((resolve) => setTimeout(() => resolve({ accessToken: "mock_access_token_for_" + data.provider }), 500));

    /*
    const response = await axios.post<{ accessToken: string }>(`/login/${data.provider}`, { code: data.code }, { withCredentials: true });
    return response.data;
    */
};
