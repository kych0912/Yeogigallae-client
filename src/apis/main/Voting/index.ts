import { api } from "../../Axios";
import { DEFAULT_Voting } from "./mocks";

export const getVoting = async () => {
    // if (import.meta.env.MODE === "development") {
    //     return DEFAULT_Voting;
    // }

    try {
        const response = await api.get(`/api/home/ongoing-vote-rooms`);
        return response.data.result.rooms;
    } catch (error) {
        console.error("Voting API 호출 오류:", error);
        return DEFAULT_Voting;
    }
};
