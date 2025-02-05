import axios from "axios";
import { DEFAULT_Voting } from "./mocks";

export const getmain = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_Voting;
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);
    return response.data;
};
