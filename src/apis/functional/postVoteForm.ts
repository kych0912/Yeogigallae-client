import { VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { api } from "../Axios";

export const postVoteForm = async (formData: VoteFormData, tripPlanType: string) => {
  if (!formData.roomId) {
    throw new Error("Invalid room ID");
  }

  const { tripPlanType: _, ...requestBody } = formData;

  const response = await api.post(`/api/trip-plan/votes/${tripPlanType}`, requestBody);
  return response.data;
};
