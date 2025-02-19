import { useQuery } from "@tanstack/react-query";
import { getVoteResult } from "../../../apis/vote/voteResult";
import { VoteResultSchema } from "../../../pages/Vote/context/vote/VoteResultSchema";
import { z } from "zod";

type VoteResultData = z.infer<typeof VoteResultSchema>;

export const useVoteResultQuery = (tripId: number) => {
  return useQuery<VoteResultData, Error>({
    queryKey: ["voteResult", tripId],
    queryFn: async () => {
      const data = await getVoteResult(tripId); 
      console.log(data);
      return VoteResultSchema.parse(data);
    },
    enabled: tripId !== undefined,
    refetchOnWindowFocus: false,               
    refetchOnMount: false,                     
    refetchOnReconnect: false,              
    retry: false,           
  });
};
