import axios from "axios";

export const sendAuthCodeToServer = async (data: { code: string; provider: string }) => {
    const response = await axios.post(`/login/${data.provider}`, { code: data.code }, { withCredentials: true });
    return response.data;
};
