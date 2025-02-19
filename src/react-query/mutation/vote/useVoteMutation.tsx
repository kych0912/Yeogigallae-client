import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postVoteResult } from "../../../apis/vote/voteResultPost";

export const usePostVoteResultMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postVoteResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voteResult"] }); 
    },
  });
};