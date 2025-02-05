import axios from "axios";
import { VoteResultResponse } from "../../types/voteTypes/voteTypes";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getVoteResult = async (tripId: number): Promise<VoteResultResponse> => {
  const response = await axios.get<VoteResultResponse>(`${API_URL}/vote/results/${tripId}`);
  return response.data;
};
