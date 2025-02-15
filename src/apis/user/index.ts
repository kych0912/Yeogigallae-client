import axios from "axios";
import { DEFAULT_User } from "./mocks";

export const getUser = async () => {
    if (import.meta.env.MODE === "development") {
        return DEFAULT_User;
    }
    try{    
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
            withCredentials: true,
        });

        return response.data.result;
    }catch(error){
        console.error("User API 호출 오류:", error);
        return DEFAULT_User;
    }
};
