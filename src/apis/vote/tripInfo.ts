import axios from "axios";
import { DEFAULT_TripInfo } from "./voteMocks";  
import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";

export const getTripInfo = async (tripId: number, roomId: number, masterId: number) => {
  if (import.meta.env.MODE === "development") {
    return TripInfoSchema.parse({
      ...DEFAULT_TripInfo,
      tripId,
      roomId,
      masterId,
    });  
  }

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/vote/trip-info/tripId=${tripId}&roomId=${roomId}&masterId=${masterId}`
  );

  return TripInfoSchema.parse(response.data.result);
};
