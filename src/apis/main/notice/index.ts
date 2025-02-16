import axios from "axios";
import { NoticeMocks } from "./mocks";

export const getNotice = async () => {
    if (import.meta.env.MODE === "development") {
        return NoticeMocks;
    }

    const response = await axios.get("/api//home/notification-status");
    return response.data;
};
