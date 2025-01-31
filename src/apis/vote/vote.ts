import axios from "axios";
import { VoteRequest, VoteResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";

const API_URL = "http://43.201.12.8:8081/api/vote"; 

export const postVote = async (voteData: VoteRequest): Promise<VoteResponse> => {
  try {
    console.log("POST test:", voteData); // ✅ 요청 데이터 로깅

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
