import { api } from "../../Axios";
import { DEFAULT_Complete } from "./mocks";
import { TravelListResult } from "./types";

export const getTravelList = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Complete;
    }
    try {
        const response = await api.get<{ result: TravelListResult }>(`/api/home/completed-trip-plans`);
        return response.data.result; // Ensure the correct result is returned
    } catch (error) {
        console.error("TravelList API 호출 오류:", error);
        return DEFAULT_Complete;
    }
};
