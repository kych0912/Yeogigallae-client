import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { VoteRoomRequest, VoteResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";
import { useVoteStore } from "../../store/VoteStore";

export default function useVoteRoomMutation() {
  const { setError } = useVoteStore();

  const fetchVoteRoom = async (data: VoteRoomRequest): Promise<VoteResponse> => {
    const response = await axios.post<VoteResponse>("/api/vote-room", data);
    return response.data; 
  };

  return useMutation<VoteResponse, VoteErrorResponse, VoteRoomRequest>({
    mutationFn: fetchVoteRoom,
    onSuccess: (response) => {
      console.log("[React Query] 투표 방 조회 성공:", response);
    },
    onError: (error) => {
      console.error("[React Query] 투표 방 조회 실패:", error.errorMessage);
      setError(error);
    },
  });
}
