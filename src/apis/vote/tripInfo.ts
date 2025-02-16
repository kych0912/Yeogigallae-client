import { DEFAULT_TripInfo } from "./mocks/tripInfoMocks";
import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";
import { api } from "../Axios";

export const getTripInfo = async (tripId: number, roomId: number, masterId: number) => {
  if (import.meta.env.MODE === "development") {
    return TripInfoSchema.parse({
      ...DEFAULT_TripInfo,
      tripId,
      roomId,
      masterId,
    });  
  }

  try{
    const response = await api.get(`/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}&masterId=${masterId}`);
    return TripInfoSchema.parse(response.data.result);
  }catch(error){
    console.error("TripInfo API 호출 오류:", error);
    return TripInfoSchema.parse({
      ...DEFAULT_TripInfo,
      tripId,
      roomId,
      masterId,
    });
  }
};