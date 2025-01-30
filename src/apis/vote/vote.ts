import axios from "axios";
import { VoteRequest, VoteResultResponse, VoteType } from "../../types/voteTypes/voteTypes";
import { useVoteStore } from "../../store/VoteStore";

export async function voteApi(voteData: VoteRequest): Promise<VoteResultResponse> {
  console.log("[API 요청] 투표 요청 데이터:", voteData); 

  const isServerRunning = false; 

  if (!isServerRunning) {
    console.log("서버가 꺼져 있습니다. Zustand 기반 mock 데이터 사용");
    const { voteCount, addVote } = useVoteStore.getState();
    addVote(voteData.type);
    const updatedVoteCount = {
      찬성: voteCount.찬성 + (voteData.type === "GOOD" ? 1 : 0),
      반대: voteCount.반대 + (voteData.type === "BAD" ? 1 : 0),
    };

    return new Promise((resolve) =>
      setTimeout(() =>
        resolve({
          httpStatus: "OK",
          code: "VOTE_200",
          message: "투표 성공",
          result: {
            userId: voteData.tripId,
            userName: `유저${voteData.tripId}`,
            type: voteData.type as VoteType,
            count: updatedVoteCount[voteData.type === "GOOD" ? "찬성" : "반대"],
          },
        }),
        500
      )
    );
  }

  return axios.post<VoteResultResponse>("/api/vote", voteData).then((res) => res.data);
}
