import { create } from "zustand";
import { VoteRequest } from "../types/voteTypes/voteTypes";


const initialVoteData: VoteRequest = {
  userEmail: "testuser@example.com",
  tripId: 999,
  type: "GOOD", 
  voteRoomId: 1001, 
};

interface VoteState {
  voteData: VoteRequest;
  setVoteData: (data: VoteRequest) => void;
}

export const useVoteStore = create<VoteState>((set) => ({
  voteData: initialVoteData, 
  setVoteData: (data) => set({ voteData: data }),
}));
