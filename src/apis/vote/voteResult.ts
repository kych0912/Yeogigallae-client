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

  try{
    const response = await axios.get(`${API_URL}/api/vote/results/tripId=${tripId}`);
    return response.data.result || response.data; 
  }catch(error){
    console.error("VoteResult API 호출 오류:", error);
    return DEFAULT_VoteResult;
  }
};
