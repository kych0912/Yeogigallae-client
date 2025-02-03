import axios from "axios";
import { RoomFormValues } from "./types";

export const createRoom = async (data:RoomFormValues) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/rooms`,data);
    return response.data;
}

