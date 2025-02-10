import axios from "axios";
import { DEFAULT_MY_FRIEND } from "./mocks";
import { Friend } from "./types";

export const getFriends = async () => {
    if(import.meta.env.MODE === "development"){
        return DEFAULT_MY_FRIEND.filter((item)=> item.friendId != 1);
    }

    const response = await axios.get<Friend[]>(`${import.meta.env.VITE_API_URL}/friendship/friends`);
    return response.data;
}

export const deleteFriend = async (friendId:number) => {
    if(import.meta.env.MODE === "development"){
        return;
    }
    
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/friendship/friends/${friendId}`);
    return response.data;
}   

