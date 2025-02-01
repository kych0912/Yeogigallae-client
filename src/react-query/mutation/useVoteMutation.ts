import { useMutation } from "@tanstack/react-query";
import { postVote } from "../../apis/vote/vote";
import { useVoteStore } from "../../store/useVoteStore";
import { VoteRequest, VoteResponse } from "../../types/voteTypes/voteTypes";

export default function useVoteMutation() {
  const { setVoteData } = useVoteStore();

  return useMutation<VoteResponse, Error, VoteRequest>({
    mutationFn: postVote,
    onSuccess: (data, variables) => {
      console.log(data);
      setVoteData(variables);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
