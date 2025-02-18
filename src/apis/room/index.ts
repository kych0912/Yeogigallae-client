import { RoomFormValues, RoomResponse } from "./types";
import { DEFAULT_ROOMS } from "./mocks";
import { api } from "../Axios";

export const createRoom = async (data:RoomFormValues) => {
    try{
        const response = await api.post(`/api/room`,data);
        return response.data;
    }catch(error){
        console.error("Room API 호출 오류:", error);
        return null;
    }
}

export const getRooms = async () => {
    try{
        const response = await api.get<RoomResponse>(`/api/room/list`);
        return response.data.result.rooms;
    }catch(error){
        console.error("Rooms API 호출 오류:", error);
        return DEFAULT_ROOMS;
    }
}