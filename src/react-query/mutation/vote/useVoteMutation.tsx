import { useMutation } from "@tanstack/react-query";
import { postVote } from "../../../apis/vote/vote";
import { VoteData } from "../../../pages/Vote/context/vote/VoteSchema";

export default function useVoteMutation() {
  return useMutation<VoteData, Error, { tripId: number; type: string; voteRoomId: number }>({
    mutationFn: postVote,
    onSuccess: (data: VoteData) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
