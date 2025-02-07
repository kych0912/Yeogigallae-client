import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getTripInfo } from "../../../apis/vote/tripInfo";
import { TripInfo } from "../../../pages/Vote/context/tripInfo/tripInfoSchema";

export const useTripInfoQuery = (tripId: number, roomId: number, masterId: number) => {
  return useQuery<TripInfo, Error>({
    queryKey: ["tripInfo", tripId, roomId, masterId],
    queryFn: () => getTripInfo(tripId, roomId, masterId),  
    enabled: !!tripId && !!roomId && !!masterId,  
    onSuccess: (data: TripInfo) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  } as UseQueryOptions<TripInfo, Error>);
};
