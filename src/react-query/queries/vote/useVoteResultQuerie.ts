import { useQuery } from "@tanstack/react-query";
import { getVoteResult } from "../../../apis/vote/voteResult";
import { VoteResultType } from "../../../pages/Vote/context/vote/VoteResultTypes";

export const useVoteResultQuery = (tripId: number) => {
  return useQuery<VoteResultType, Error>({
    queryKey: ["voteResult", tripId],
    queryFn: async () => {
      const data = await getVoteResult(tripId);
      console.log(data);
      return data;
    },
    enabled: tripId !== undefined && tripId !== null,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};
