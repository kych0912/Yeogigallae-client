import axios from "axios";
import { DEFAULT_Vote } from "./mocks/voteMocks";
import { VoteSchema } from "../../pages/Vote/context/vote/VoteSchema";

const API_URL = import.meta.env.VITE_API_URL as string;

export const postVote = async ({ tripId, type, voteRoomId }: { tripId: number; type: string; voteRoomId: number }) => {
  if (import.meta.env.MODE === "development") {
    return VoteSchema.parse({
      ...DEFAULT_Vote,
      tripId,
      type,
      voteRoomId,
    });
  }

  const response = await axios.post(`${API_URL}/vote`, { tripId, type, voteRoomId });
  
  return VoteSchema.parse(response.data.result);
};
