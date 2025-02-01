import axios from "axios";
import { VoteRequest, VoteResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";

const API_URL = import.meta.env.VITE_API_URL as string;

export const postVote = async (voteData: VoteRequest): Promise<VoteResponse> => {
  try {
    console.log("POST test:", voteData); 

    const response = await axios.post<VoteResponse>(API_URL, voteData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data as VoteErrorResponse;
  }
};
