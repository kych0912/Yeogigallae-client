import { NoticeResponse } from "./types";
import { NoticeMocks } from "./mocks";
import { api } from "../Axios";

export const getNotice = async (): Promise<NoticeResponse["result"]> => {
    try{
        const response = await api.get(`/api/notifications`);
        return response.data.result;
    }catch(error){
        console.error("Notice API 호출 오류:", error);
        return NoticeMocks;
    }
}
