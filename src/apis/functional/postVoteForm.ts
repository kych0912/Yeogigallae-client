import axios from "axios";
import { VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";

const API_URL = import.meta.env.VITE_API_URL as string;

export const postVoteForm = async ({ tripPlanType, ...formData }: VoteFormData) => {
  const response = await axios.post(`${API_URL}trip-plan/votes/${tripPlanType}`, formData);
  return response.data;
};
