import { Notice, NoticeResponse } from "./types";
import { NoticeMocks } from "./mocks";
import axios from "axios";

export const getNotice = async (): Promise<Notice[]> => {
    try{
        const response = await axios.get<NoticeResponse>(`${import.meta.env.VITE_API_URL}/api/notifications`);
        return response.data.result;
    }catch(error){
        console.error("Notice API 호출 오류:", error);
        return NoticeMocks;
    }
};

