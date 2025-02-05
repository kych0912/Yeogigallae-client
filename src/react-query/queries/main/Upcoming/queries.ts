import { useQuery } from "@tanstack/react-query";
import { getUpcoming } from "../../../../apis/main/Upcoming";

export const useGetUpcoming = (userEmail: string | null) => {
    return useQuery({
        queryKey: ["upcoming", userEmail],
        queryFn: () => getUpcoming(userEmail ?? ""),
        enabled: !!userEmail,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
};
