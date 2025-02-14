import { Notice } from "./types";
import axios from "axios";
import { NoticeMocks } from "./mocks";

export const getNotice = async (): Promise<Notice[]> => {
    if(import.meta.env.MODE === "development"){
        return NoticeMocks;
    }

    try{
        const response = await axios.get<Notice[]>(`${import.meta.env.VITE_API_URL}/api/notifications`);
        return response.data;
    }catch(error){
        console.error("Notice API 호출 오류:", error);
        return NoticeMocks;
    }
};

