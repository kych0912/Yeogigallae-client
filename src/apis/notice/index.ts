import { Notice } from "./types";
import axios from "axios";
import { NoticeMocks } from "./mocks";

export const getNotice = async (): Promise<Notice[]> => {
    if(import.meta.env.MODE === "development"){
        return NoticeMocks;
    }

    const response = await axios.get<Notice[]>(`${import.meta.env.VITE_API_URL}/api/notifications`);
    return response.data;
};

