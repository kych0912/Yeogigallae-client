import { create } from "zustand";
import { VoteType } from "../types/voteTypes/voteTypes";

interface VoteState {
  voteType: VoteType | null;
  setVoteType: (type: VoteType) => void;
}

export const useVoteResultStore = create<VoteState>((set) => ({
  voteType: null,
  setVoteType: (type) => set({ voteType: type }),
}));
