import { useMutation } from "@tanstack/react-query";
import { postVoteResult } from "../../../apis/vote/voteResultPost";
import { VoteData } from "../../../pages/Vote/context/vote/VoteSchema";

export const useVoteResultMutation = () => {
  return useMutation({
    mutationFn: (data: VoteData) => postVoteResult(data),
    onSuccess: (data) => {
      console.log("투표 종료 성공:", data);
    },
    onError: (error) => {
      console.error("투표 종료 API 요청 실패:", error);
    }
  });
};
