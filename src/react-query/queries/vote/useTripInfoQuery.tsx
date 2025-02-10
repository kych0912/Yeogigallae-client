import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getTripInfo } from "../../../apis/vote/tripInfo";
import { TripInfo } from "../../../pages/Vote/context/tripInfo/tripInfoSchema";

export const useTripInfoQuery = (tripId?: number, roomId?: number, masterId?: number) => {
  const queryOptions: UseQueryOptions<TripInfo, Error> = {
    queryKey: tripId !== undefined && roomId !== undefined && masterId !== undefined
      ? ["tripInfo", tripId, roomId, masterId]
      : ["tripInfo"],

    queryFn: async () => {
      if (tripId === undefined || roomId === undefined || masterId === undefined) {
        throw new Error("Invalid trip info parameters");
      }
      return await getTripInfo(tripId, roomId, masterId);
    },

    enabled: tripId !== undefined && roomId !== undefined && masterId !== undefined,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 1,
  };

  return useQuery(queryOptions);
};
