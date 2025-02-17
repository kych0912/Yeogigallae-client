import { api } from "../Axios";
import { DEFAULT_VoteResult } from "./mocks/voteResultMocks";

export const getVoteResult = async ({
  tripId,
}: {
  tripId: number;
}) => {
  try {
    if (!tripId || isNaN(tripId)) {
      console.error("🚨 getVoteResult: 올바르지 않은 tripId", tripId);
      return DEFAULT_VoteResult;
    }

    const response = await api.get(`/api/vote/results/${tripId}`);

    if (!response.data) {
      console.error("🚨 getVoteResult: 응답 데이터 없음", response);
      return DEFAULT_VoteResult;
    }

    console.log("✅ VoteResult API 응답:", response.data);

    return response.data.result || response.data;
  } catch (error) {
    console.error("❌ VoteResult API 호출 오류:", error);
    return DEFAULT_VoteResult;
  }
};
