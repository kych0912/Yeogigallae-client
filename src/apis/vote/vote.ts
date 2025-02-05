import axios from "axios";
import { VoteRequest, VoteResponse } from "../../types/voteTypes/voteTypes";

const API_URL = import.meta.env.VITE_API_URL as string;

export const postVote = (voteData: VoteRequest) => 
  axios.post<VoteResponse>(`${API_URL}/vote`, voteData, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.data);
