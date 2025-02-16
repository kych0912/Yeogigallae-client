import axios from "axios";

export const getProfile = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`,{
        withCredentials:true,
    });
    return response.data;
}

export const logout = async () => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`,{
        withCredentials:true,
    });
    return response.data;
}

