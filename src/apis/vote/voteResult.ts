import { api } from "../Axios";
import { VoteResultType } from "../../pages/Vote/context/vote/VoteResultTypes";

export const getVoteResult = async (tripId: number): Promise<VoteResultType> => {
  console.log(`요청하는 tripId: ${tripId}`);
  const response = await api.get(`/api/vote/results/${tripId}`);
  return response.data as VoteResultType;
};
