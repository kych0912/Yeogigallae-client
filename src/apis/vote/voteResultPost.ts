import axios from "axios";
import { VoteSchema, VoteData } from "../../pages/Vote/context/vote/VoteSchema";

export const postVoteResult = async (data: VoteData) => {
  const parsedData = VoteSchema.parse(data);

  const response = await axios.post("/api/vote/trip-result", parsedData);
  return response.data;
};
