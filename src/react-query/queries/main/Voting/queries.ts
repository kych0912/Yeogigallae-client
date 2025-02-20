import { useQuery } from "@tanstack/react-query";
import { getVoting } from "../../../../apis/main/Voting/index";

export const useGetVoting = () => {
    return useQuery({
        queryKey: ["voting"],
        queryFn: getVoting,
        refetchOnReconnect: false,
        retry: false,
    });
};
