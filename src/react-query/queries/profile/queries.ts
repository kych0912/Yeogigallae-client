import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../apis/profile";

export const useProfileQuery = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    });
}