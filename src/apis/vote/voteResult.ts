import { api } from "../Axios";
import { DEFAULT_VoteResult } from "./mocks/voteResultMocks";

export const getVoteResult = async ({
  tripId,
}: {
  tripId: number;
  userId: number;
  type: "GOOD" | "BAD";
}) => {
  try{
    const response = await api.get(`/api/vote/results/tripId=${tripId}`);
    return response.data.result || response.data; 
  }catch(error){
    console.error("VoteResult API 호출 오류:", error);
    return DEFAULT_VoteResult;
  }
};
