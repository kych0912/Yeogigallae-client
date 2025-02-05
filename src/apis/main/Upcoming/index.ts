import axios from "axios";
import { DEFAULT_Upcoming } from "./mocks";

export const getUpcoming = async (userEmail: string) => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Upcoming;
    }
    if (!userEmail) return DEFAULT_Upcoming;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/completed-vote-rooms?userEmail=${userEmail}`);

    return response.data.result.rooms;
};
