import axios from "axios";
import { DEFAULT_TripInfo } from "./mocks/tripInfoMocks";
import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getTripInfo = async (tripId: number, roomId: number) => {
  // if (import.meta.env.MODE === "development") {
  //   console.log(DEFAULT_TripInfo);
  //   return TripInfoSchema.parse(DEFAULT_TripInfo);
  // }

  try {
    const response = await axios.get(
      `${API_URL}/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`
    );

    console.log(response.data);
    return TripInfoSchema.parse(response.data);
  } catch (error) {
    console.error( error);

    return TripInfoSchema.parse(DEFAULT_TripInfo);
  }
};
