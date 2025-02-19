import { api } from "../../apis/Axios";

type PostVoteResultParams = {
  tripId: number;
  roomId: number;
  voteRoomId: number;
};

export const postVoteResult = async ({ tripId, roomId, voteRoomId }: PostVoteResultParams) => {
  const response = await api.post("/api/vote/trip-result", {
    tripId,
    roomId,
    voteRoomId,
  });
  return response.data;
};