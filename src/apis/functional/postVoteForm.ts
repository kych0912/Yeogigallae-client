import { VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { api } from "../Axios";

export const postVoteForm = async ({ tripPlanType, ...formData }: VoteFormData) => {
  const response = await api.post(`/api/trip-plan/votes/${tripPlanType}`, formData);
  return response.data;
};
