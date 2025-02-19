import { useMutation } from "@tanstack/react-query";
import { postVote } from "../../../apis/vote/vote";
import { VoteData } from "../../../pages/Vote/context/vote/VoteDataType";

export const useVoteMainMutation = (onSuccessCallback?: (data: any) => void) => {
  const mutation = useMutation({
    mutationFn: (voteData: VoteData) => postVote(voteData),
    onSuccess: (data) => {
      console.log(data);
      onSuccessCallback?.(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutation;
};
