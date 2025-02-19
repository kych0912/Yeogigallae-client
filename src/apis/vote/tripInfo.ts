import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";
import { api } from "../Axios";

export const getTripInfo = async (tripId: number, roomId: number) => {
  try {
    const response = await api.get(`/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`);
    console.log(response.data);  
    
    return TripInfoSchema.parse(response.data); 
  } catch (error) {
    console.error(error);
    throw error;  
  }
};
