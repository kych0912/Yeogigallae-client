import { useQuery } from "@tanstack/react-query";
import { getUpcoming } from "../../../../apis/main/Upcoming";

export const useGetUpcoming = () => {
    return useQuery({
        queryKey: ["upcoming"],
        queryFn: getUpcoming,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
};
