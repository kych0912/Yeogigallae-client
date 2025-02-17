import { useQuery } from "@tanstack/react-query";
import { getTripInfo } from "../../../apis/vote/tripInfo";
import { TripInfoResponse } from "../../../pages/Vote/context/tripInfo/TripInfoContext";

export const useTripInfoQuery = (tripId?: number, roomId?: number) => {
  return useQuery<TripInfoResponse, Error>({
    queryKey: tripId !== undefined && roomId !== undefined
      ? ["tripInfo", tripId, roomId]
      : ["tripInfo"],

    queryFn: () => {
      if (tripId === undefined || roomId === undefined) {
        throw new Error("Invalid trip info parameters");
      }
      return getTripInfo(tripId, roomId); 
    },

    enabled: tripId !== undefined && roomId !== undefined,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};
