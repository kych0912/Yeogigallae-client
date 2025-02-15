import axios from "axios";
import { RoomFormValues, RoomResponse } from "./types";
import { DEFAULT_ROOMS } from "./mocks";

export const createRoom = async (data:RoomFormValues) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/room`,data);
    return response.data;
}

export const getRooms = async () => {
    try{
        const response = await axios.get<RoomResponse>(`${import.meta.env.VITE_API_URL}/api/room/list`);
        return response.data.result;
    }catch(error){
        console.error("Rooms API 호출 오류:", error);
        return DEFAULT_ROOMS;
    }
}