import { api } from "../Axios";
import axiosError from "axios";
import { AuthState } from "../../pages/Login/useAuthStore";

export interface UserInfo{
    userId: string;
    email: string;
    nickname: string;
    profileImage: string;
}

interface UserResponse{
    status: number;
    message: string;
    httpStatus: string;
    result: Omit<AuthState, "setProfile" | "clearAuth">;
}

export const getUser = async () => {
    try{    
        const response = await api.get<UserResponse>(`/api/auth/user`);
        return response.data.result;
    }catch(error){
        if(axiosError.isAxiosError(error)){
            console.error("User API 호출 오류:", error.response?.data);
        }
        console.error("AXIOS ERROR X User API 호출 오류:", error);
        throw error;
    }
};
