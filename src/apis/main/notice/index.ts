import { api } from "../../Axios";
import { NoticeResult } from "./mocks";
import { NoticeResponse } from "./types";

export const getNotice = async (): Promise<NoticeResponse> => {
    try {
        const response = await api.get<NoticeResponse>(`/api/notifications`);
        return response.data;
    } catch (error) {
        console.error("Notice API 호출 오류:", error);
        return NoticeResult;
    }
};
