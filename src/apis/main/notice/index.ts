import { api } from "../../Axios";
import { NoticeMocks } from "./mocks";

export const getNotice = async () => {
    // if (import.meta.env.MODE === "development") {
    //     return NoticeMocks;
    // }
    try {
        const response = await api.get(`/api/home/notification-status`);
        return response.data;
    } catch (error) {
        console.error("Notice  API 호출 오류:", error);
        return NoticeMocks;
    }
};
