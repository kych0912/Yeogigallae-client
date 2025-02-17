import axios from "axios";
import { DEFAULT_VoteResult } from "./mocks/voteResultMocks";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getVoteResult = async ({ tripId }: { tripId: number }) => {
  // if (import.meta.env.MODE === "development") {
  //   console.log("[Mock] VoteResult API 응답:", DEFAULT_VoteResult);
  //   return DEFAULT_VoteResult;
  // }

  try {
    const response = await axios.get(`${API_URL}/api/vote/results/${tripId}`);

    console.log("[API] VoteResult 응답 데이터:", response.data);

    if (!response.data || typeof response.data !== "object") {
      return DEFAULT_VoteResult;
    }
    const { result } = response.data;
    if (!Array.isArray(result)) {
      return DEFAULT_VoteResult;
    }
    return response.data;
  } catch (error: any) {
    return DEFAULT_VoteResult;
  }
};
