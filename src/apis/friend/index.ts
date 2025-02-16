import { DEFAULT_MY_FRIEND } from "./mocks";
import { FriendResponse } from "./types";
import { api } from "../Axios";

export const getFriends = async () => {
    try{
        const response = await api.get<FriendResponse>(`/api/friendship/friends`);
        return response.data.result;
    }catch(error){
        console.error("Friends API 호출 오류:", error);
        return DEFAULT_MY_FRIEND;
    }
}

export const deleteFriend = async (friendId:number) => {
    if(import.meta.env.MODE === "development"){
        return;
    }
    
    const response = await api.delete(`/friendship/friends/${friendId}`);
    return response.data;
}   
