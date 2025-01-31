import axios from "axios";
import { VoteResultResponse } from "../../types/voteTypes/voteTypes";

export const getVoteResult = async (tripId: number): Promise<VoteResultResponse> => {
  const response = await axios.get<VoteResultResponse>(`http://43.201.12.8:8081/api/vote/results/${tripId}`);
  return response.data;
};
