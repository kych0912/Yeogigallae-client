import axios from "axios";
import { DEFAULT_VoteResult } from "./mocks/voteResultMocks";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getVoteResult = async ({
  tripId,
  userId,
  type,
}: {
  tripId: number;
  userId: number;
  type: "GOOD" | "BAD";
}) => {
  if (import.meta.env.MODE === "development") {
    return {
      ...DEFAULT_VoteResult,
      userId,
      type,
      tripId,
    };
  }

  const response = await axios.get(`${API_URL}/vote/results/tripId=${tripId}`);

  return response.data.result || response.data; 
};
