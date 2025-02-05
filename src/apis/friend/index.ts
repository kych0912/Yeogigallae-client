import axios from "axios";
import { DEFAULT_MY_FRIEND } from "./mocks";

export const getFriends = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_MY_FRIEND;
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/friend-info`);
    return response.data;
};
