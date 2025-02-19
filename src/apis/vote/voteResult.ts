import { api } from "../Axios";
import { VoteResultSchema, VoteResultType } from "../../pages/Vote/context/vote/VoteResultSchema";

export const getVoteResult = async (tripId: number): Promise<VoteResultType> => {
  const response = await api.get(`/api/vote/results/${tripId}`);
  return VoteResultSchema.parse(response.data); 
};
