import axios from "axios";

export const getUpcoming = async (userEmail: string) => {
    if (!userEmail) return { rooms: [] };

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/completed-vote-rooms?userEmail=${userEmail}`);

    return response.data.result.rooms;
};
