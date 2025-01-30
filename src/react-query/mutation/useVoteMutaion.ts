import { useMutation } from "@tanstack/react-query";
import { VoteRequest, VoteResultResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";
import { voteApi } from "../../apis/vote/vote";
import { useVoteStore } from "../../store/VoteStore";

export default function useVoteMutation() {
  const { setVoteResult, setError } = useVoteStore();

  return useMutation<VoteResultResponse, VoteErrorResponse, VoteRequest>({
    mutationFn: voteApi,
    onSuccess: (response) => {
      console.log("[React Query] 투표 성공:", response);
      setVoteResult(response);
    },
    onError: (error: any) => {
      console.error("[React Query] 투표 실패:", error.response?.data || error.message);

      const errorResponse: VoteErrorResponse = error.response?.data || {
        timestamp: new Date().toISOString(),
        httpStatus: "BAD_REQUEST",
        code: "COMMON_400",
        path: "/api/vote",
        errorMessage: "서버 응답 없음 또는 네트워크 오류",
      };
      setError(errorResponse);
    },
  });
}
