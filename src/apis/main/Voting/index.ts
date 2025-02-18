import { api } from "../../Axios";
import { DEFAULT_Voting } from "./mocks";
import { VotingResponse } from "./types";

export const getVoting = async (): Promise<VotingResponse> => {
    // if (import.meta.env.MODE === "development") {
    //     return DEFAULT_Voting;
    // }

    try {
        const response = await api.get<{ result: VotingResponse }>("/api/home/ongoing-vote-rooms");
        return response.data.result;
    } catch (error) {
        console.error("Voting API 호출 오류:", error);
        return DEFAULT_Voting;
    }
};
