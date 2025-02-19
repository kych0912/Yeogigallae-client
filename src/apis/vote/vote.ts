import { api } from "../Axios";
import { VoteData } from "../../pages/Vote/context/vote/VoteDataType";

export const postVote = async (voteData: VoteData) => {
  try {
    if (!voteData) {
      throw new Error("postVote: voteData가 전달되지 않았습니다.");
    }

    const response = await api.post(`/api/vote`, voteData);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
