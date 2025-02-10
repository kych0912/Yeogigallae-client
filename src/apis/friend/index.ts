import axios from "axios";
import { DEFAULT_MY_FRIEND } from "./mocks";
import { Friend } from "./types";

export const getFriends = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_MY_FRIEND;
    }

    const response = await axios.get<Friend[]>(`${import.meta.env.VITE_API_URL}/friend-info`);
    return response.data;
};
