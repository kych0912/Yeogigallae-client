import { api } from "../Axios";

export const getProfile = async () => {
    const response = await api.get(`/api/auth/profile`);
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`/api/auth/logout`);
    return response.data;
}

export const deleteAccount = async () => {
    const response = await api.delete(`/api/auth/delete`);
    return response.data;
}



