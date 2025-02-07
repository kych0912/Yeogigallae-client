import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getVoteResult } from "../../apis/vote/voteResult";
import { VoteResultResponse } from "../../types/voteTypes/voteTypes";

const getVoteResultQueryOptions = (tripId: number): UseQueryOptions<VoteResultResponse, Error> => ({
  queryKey: ["voteResult", tripId] as const,
  queryFn: async () => {
    try {
      return await getVoteResult(tripId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  staleTime: 60 * 1000,
  gcTime: 5 * 60 * 1000,
  retry: 0, 
  enabled: !!tripId,
});

export const useVoteResultQuery = (tripId: number) => {
  return useQuery<VoteResultResponse, Error>(getVoteResultQueryOptions(tripId));
};
