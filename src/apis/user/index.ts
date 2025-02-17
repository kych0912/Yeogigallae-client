import { api } from "../Axios";
import { DEFAULT_User } from "./mocks";

export const getUser = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_User;
    }
    try{    
        const response = await api.get(`/user`);

        return response.data.result;
    }catch(error){
        console.error("User API 호출 오류:", error);
        return DEFAULT_User;
    }
};
