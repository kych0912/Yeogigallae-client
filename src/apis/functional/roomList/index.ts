import axios from 'axios';
import { RoomListResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchRoomList = async (): Promise<RoomListResponse> => {
  const response = await axios.get(`${API_URL}/api/room/list`, {
    withCredentials: true, 
  });
  return response.data;
};