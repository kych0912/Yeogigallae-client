import axios from "axios";
import { DEFAULT_Complete } from "./mocks";

export const getTravelList = async () => {
    // if (import.meta.env.MODE === "development") {
    //     return DEFAULT_Complete;
    // }
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/home/completed-trip-plans`, {
            withCredentials: true,
        });
        return response.data.result.rooms;
    } catch (error) {
        console.error("TravelList API 호출 오류:", error);
        return DEFAULT_Complete;
    }
};
