import axios from "axios";
import { DEFAULT_Voting } from "./mocks";

export const getVoting = async (userEmail: string) => {
    if (import.meta.env.MODE === "development") {
        return new Promise((resolve) => {
            setTimeout(() => resolve(DEFAULT_Voting), 2000); // 1초 지연(development아닐떄 화면 확인)
        });
    }
    if (!userEmail) return DEFAULT_Voting;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/completed-vote-rooms?userEmail=${userEmail}`);

    return response.data.result.rooms;
};
