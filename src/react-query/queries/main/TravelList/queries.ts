import { useQuery } from "@tanstack/react-query";
import { getTravelList } from "../../../../apis/main/TravelList";

export const useGetTravelList = () => {
    return useQuery({
        queryKey: ["travelList"],
        queryFn: getTravelList,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
};
