import axios from "axios";
import { DEFAULT_Main } from "./mocks";

export const getmain = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Main;
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/friend-info`);
    return response.data;
};
