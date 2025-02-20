import { api } from "../../Axios";
import { DEFAULT_Upcoming } from "./mocks";
import { UpcomingResult } from "./types"; // 타입 추가

export const getUpcoming = async (): Promise<UpcomingResult> => {
    try {
        const response = await api.get<{ result: UpcomingResult }>(`/api/home/completed-vote-rooms`);
        return response.data.result;
    } catch (error) {
        console.error("Upcoming API 호출 오류:", error);
        return DEFAULT_Upcoming;
    }
};
