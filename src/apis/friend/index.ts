import { DEFAULT_MY_FRIEND } from "./mocks";
import { FriendResponse, InviteResponse } from "./types";
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
    const response = await api.delete(`/api/friendship/friends/${friendId}`);
    return response.data;
}   

export const createFriendUrl = async () => {
    const response = await api.post<InviteResponse>(`/api/invite`);
    return response.data.result.inviteUrl;
}

export const acceptInvite = async (token:string) => {
    const response = await api.post(`/api/friendship/accept?token=${token}`);
    return response.data;
}

