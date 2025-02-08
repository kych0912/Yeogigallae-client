import axios from "axios";
import { DEFAULT_VoteResult } from "./mocks/voteResultMocks";
import { VoteResultSchema } from "../../pages/Vote/context/vote/VoteResultSchema";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getVoteResult = async ({ tripId, userId, type }: { tripId: number, userId: number; type: string; }) => {
  if (import.meta.env.MODE === "development") {
    return VoteResultSchema.parse({
      ...DEFAULT_VoteResult,
      userId,
      type,
      tripId
    });
  }

  const response = await axios.get(`${API_URL}/vote/results/tripId=${tripId}`);
  
  return VoteResultSchema.parse(response.data.result);
};
