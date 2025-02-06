import axios from "axios";
import { DEFAULT_Complete } from "./mocks";

export const getTravelList = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Complete;
    }
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/completed-trip-plans`);

    return response.data.result.rooms;
};
