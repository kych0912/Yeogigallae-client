import axios from "axios";
import { RoomFormValues } from "./types";
import { DEFAULT_ROOMS } from "./mocks";

export const createRoom = async (data:RoomFormValues) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/room`,data);
    return response.data;
}

export const getRooms = async () => {
    if(import.meta.env.MODE === "development"){
        return DEFAULT_ROOMS;
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/rooms`);
    return response.data;
}