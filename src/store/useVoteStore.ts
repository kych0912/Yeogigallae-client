import { create } from "zustand";
import { VoteRequest } from "../types/voteTypes/voteTypes";

// ✅ 기본 투표 데이터 추가
const initialVoteData: VoteRequest = {
  userEmail: "testuser@example.com", // 가상의 사용자 이메일
  tripId: 999, // 가상의 여행 ID
  type: "GOOD", // 투표 타입 (서버에서 허용하는 값 사용)
  voteRoomId: 1001, // 가상의 투표 방 ID
};

interface VoteState {
  voteData: VoteRequest;
  setVoteData: (data: VoteRequest) => void;
}

export const useVoteStore = create<VoteState>((set) => ({
  voteData: initialVoteData, 
  setVoteData: (data) => set({ voteData: data }),
}));
