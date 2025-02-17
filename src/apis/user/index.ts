import { api } from "../Axios";
import { DEFAULT_User } from "./mocks";

export interface UserInfo{
    email: string;
    nickname: string;
    profileImage: string;
}

interface UserResponse{
    status: number;
    message: string;
    httpStatus: string;
    result: UserInfo;
}

export const getUser = async () => {
    try{    
        const response = await api.get<UserResponse>(`/api/auth/user`);
        return response.data.result;
    }catch(error){
        console.error("User API 호출 오류:", error);
        return DEFAULT_User;
    }
};
