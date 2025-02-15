import axios from "axios";
import { DEFAULT_Voting } from "./mocks";

export const getVoting = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Voting;
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/ongoing-vote-rooms`, {
            withCredentials: true,
        });
        return response.data.result.rooms;
    }catch(error){
        console.error("Voting API 호출 오류:", error);
        return DEFAULT_Voting;
    }
};
