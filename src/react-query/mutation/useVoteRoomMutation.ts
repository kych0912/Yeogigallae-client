import { useMutation } from "@tanstack/react-query";
import { createVoteRoom } from "../../apis/vote/voteRoom";
import useVoteRoomStore from "../../store/useVoteRooomStore";
import { VoteRoomRequest, VoteRoomResponse } from "../../types/voteTypes/voteTypes"; 

export default function useVoteRoomMutation() {
    const { tripId } = useVoteRoomStore(); 

    return useMutation<VoteRoomResponse, Error, VoteRoomRequest>({
        mutationFn: async () => {
            if (!tripId) throw new Error("tripId가 존재하지 않습니다.");
            return createVoteRoom({ tripId });
        },
        onSuccess: (data) => {
            console.log(data); 
        },
        onError: (error) => {
            console.error(error);
        },
    });
}
