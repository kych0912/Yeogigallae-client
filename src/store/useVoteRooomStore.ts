import { create } from "zustand";
import { VoteRoomRequest } from "../types/voteTypes/voteTypes";

// 임시 데이터 할당
const initialVoteRoomData: VoteRoomRequest = {
    tripId: 999, 
};

interface VoteRoomState {
    tripId: number;
    setTripId: (id: number) => void;
}

const useVoteRoomStore = create<VoteRoomState>((set) => ({
    ...initialVoteRoomData, 
    setTripId: (id) => set({ tripId: id }),
}));

export default useVoteRoomStore;
