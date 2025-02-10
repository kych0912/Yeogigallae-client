import axios from "axios";
// import { DEFAULT_Voting } from "./mocks";

export const getVoting = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/ongoing-vote-rooms`, {
        withCredentials: true,
    });

    return response.data.result.rooms;
};
