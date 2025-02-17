import { useQuery } from "@tanstack/react-query";
import { getVoteResult } from "../../../apis/vote/voteResult";
import { VoteResultSchema } from "../../../pages/Vote/context/voteResultSchema";
import { z } from "zod";

type VoteResultData = z.infer<typeof VoteResultSchema>;

export const useVoteResultQuery = (tripId: number) => {
  console.log("🟢 useVoteResultQuery: tripId =", tripId); 

  return useQuery<VoteResultData, Error>({
    queryKey: ["voteResult", tripId], 
    queryFn: async () => {
      const data = await getVoteResult({ tripId });

      console.log("🟢 useVoteResultQuery 응답 데이터:", data);

      return VoteResultSchema.parse(data);
    },
    enabled: typeof tripId === "number" && tripId > 0,
  });
};

