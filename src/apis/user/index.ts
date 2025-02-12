import axios from "axios";
import { DEFAULT_User } from "./mocks";

export const getUser = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_User;
    }
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
        withCredentials: true,
    });

    return response.data.result;
};
