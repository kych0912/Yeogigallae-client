import { create } from "zustand";
import { VoteResultResponse, VoteType, VoteErrorResponse } from "../types/voteTypes/voteTypes";
import { mockVoteData } from "../pages/Vote/test";

interface VoteState {
  voteResult: VoteResultResponse | null;
  voteCount: { 찬성: number; 반대: number };
  error: VoteErrorResponse | null;
  addVote: (type: VoteType) => void;
  setVoteResult: (result: VoteResultResponse) => void;
  setError: (error: VoteErrorResponse) => void;
}

export const useVoteStore = create<VoteState>((set, get) => ({
  voteResult: null,
  error: null,

  voteCount: {
    찬성: mockVoteData[0].filter((user) => user.type === "GOOD").length,
    반대: mockVoteData[0].filter((user) => user.type === "BAD").length,
  },

  addVote: (type) => {
    set((state) => {
      const voteType = type === "GOOD" ? "찬성" : "반대";

      return {
        voteCount: {
          ...state.voteCount,
          [voteType]: state.voteCount[voteType] + 1,
        },
      };
    });

    console.log(`[Zustand] ${type} 투표 추가됨. 현재 상태:`, get().voteCount);
  },

  setVoteResult: (result) =>
    set((state) => {
      const voteType = result.result.type === "GOOD" ? "찬성" : "반대";

      return {
        voteResult: result,
        voteCount: {
          ...state.voteCount,
          [voteType]: result.result.count,
        },
      };
    }),

  setError: (error) => set({ error }),
}));
