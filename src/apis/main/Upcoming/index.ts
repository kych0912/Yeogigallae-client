import axios from "axios";
import { DEFAULT_Upcoming } from "./mocks";

export const getUpcoming = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Upcoming;
    }
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/completed-vote-rooms`, {
            withCredentials: true,
        });
        return response.data.result.rooms;
    }catch(error){
        console.error("Upcoming API 호출 오류:", error);
        return DEFAULT_Upcoming;
    }
};
