import { useQuery } from "@tanstack/react-query";
import { getTripInfo } from "../../../apis/vote/tripInfo";
import { TripInfoResponse } from "../../../pages/Vote/context/tripInfo/TripInfoContext";

export const useTripInfoQuery = (tripId?: number, roomId?: number, masterId?: number) => {
  return useQuery<TripInfoResponse, Error>({
    queryKey: tripId !== undefined && roomId !== undefined && masterId !== undefined
      ? ["tripInfo", tripId, roomId, masterId]
      : ["tripInfo"],

    queryFn: () => {
      if (tripId === undefined || roomId === undefined || masterId === undefined) {
        throw new Error("Invalid trip info parameters");
      }
      return getTripInfo(tripId, roomId, masterId); 
    },

    enabled: tripId !== undefined && roomId !== undefined && masterId !== undefined,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};
