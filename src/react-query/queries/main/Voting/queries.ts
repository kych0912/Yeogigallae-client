import { useQuery } from "@tanstack/react-query";
import { getVoting } from "../../../../apis/main/Voting/index";

export const useGetVoting = (userEmail: string | null) => {
    return useQuery({
        queryKey: ["voting", userEmail],
        queryFn: () => getVoting(userEmail ?? ""),
        enabled: !!userEmail,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
};
