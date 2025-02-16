import axios from "axios";
import { DEFAULT_MY_FRIEND } from "./mocks";
import { FriendResponse } from "./types";

export const getFriends = async () => {
    try{
        const response = await axios.get<FriendResponse>(`${import.meta.env.VITE_API_URL}/api/friendship/friends`,{
            withCredentials:true,
        });
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
    
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/friendship/friends/${friendId}`,{
        withCredentials:true,
    });
    return response.data;
}   
