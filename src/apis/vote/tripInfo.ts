import axios from "axios";
import { DEFAULT_TripInfo } from "./mocks/tripInfoMocks";
import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getTripInfo = async (tripId: number, roomId: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`,
      {
        withCredentials: true, 
      }
    );

    console.log(response.data);
    return TripInfoSchema.parse(response.data);
  } catch (error) {
    console.error(error);

    return TripInfoSchema.parse(DEFAULT_TripInfo);
  }
};
