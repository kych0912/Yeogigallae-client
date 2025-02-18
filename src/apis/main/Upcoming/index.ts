import { api } from "../../Axios";
import { DEFAULT_Upcoming } from "./mocks";

export const getUpcoming = async () => {
    // if (import.meta.env.MODE === "development") {
    //     return DEFAULT_Upcoming;
    // }
    try {
        const response = await api.get(`/api/home/completed-vote-rooms`);
        return response.data.result.rooms;
    } catch (error) {
        console.error("Upcoming API 호출 오류:", error);
        return DEFAULT_Upcoming;
    }
};
