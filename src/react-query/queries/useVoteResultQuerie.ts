import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getVoteResult } from "../../apis/vote/voteResult";
import { VoteResultData } from "../../pages/Vote/context/vote/VoteResultSchema";

const getVoteResultQueryOptions = ({
  tripId,
  userId,
  type,
}: {
  tripId: number;
  userId: number;
  type: string;
}): UseQueryOptions<VoteResultData, Error> => ({
  queryKey: ["voteResult", tripId, userId, type] as const,
  queryFn: () => getVoteResult({ tripId, userId, type }), // ✅ 스키마 검증 제거
  staleTime: 60 * 1000, 
  gcTime: 5 * 60 * 1000,
  retry: 0,
  enabled: !!tripId && !!userId && !!type, 
});

export const useVoteResultQuery = ({
  tripId,
  userId,
  type,
}: {
  tripId: number;
  userId: number;
  type: string;
}) => {
  return useQuery<VoteResultData, Error>(getVoteResultQueryOptions({ tripId, userId, type }));
};
