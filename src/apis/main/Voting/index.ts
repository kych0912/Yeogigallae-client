import { api } from "../../Axios";
import { DEFAULT_Voting } from "./mocks";
import { Voting } from "./types";

export const getVoting = async (): Promise<Voting> => {
    // if (import.meta.env.MODE === "development") {
    //     return DEFAULT_Voting;
    // }

    try {
        const response = await api.get<{ result: Voting }>("/api/home/ongoing-vote-rooms");
        return response.data.result;
    } catch (error) {
        console.error("Voting API 호출 오류:", error);
        return DEFAULT_Voting;
    }
};
