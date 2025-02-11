import { useQuery } from "@tanstack/react-query";
import { getVoteResult } from "../../../apis/vote/voteResult";
import { VoteResultSchema } from "../../../pages/Vote/context/voteResultSchema";
import { z } from "zod";

type VoteResultData = z.infer<typeof VoteResultSchema>;

export const useVoteResultQuery = ({
  tripId,
  userId,
  type,
}: {
  tripId: number;
  userId: number;
  type: "GOOD" | "BAD";
}) => {
  return useQuery<VoteResultData, Error>({
    queryKey: ["voteResult", tripId, userId, type],
    queryFn: async () => {
      const data = await getVoteResult({ tripId, userId, type });

      return VoteResultSchema.parse(data);
    },
    enabled: !!tripId && !!userId && !!type,  
  });
};
