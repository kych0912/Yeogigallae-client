import { VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { api } from "../Axios";

// Update the API function
export const postVoteForm = async (formData: VoteFormData, tripPlanType: string) => {
  // Ensure roomId is valid (replace with actual logic to retrieve a valid room ID)
  if (!formData.roomId || formData.roomId === 22) {
    throw new Error("Invalid room ID");
  }

  // Construct the API request with the correct URL
  const response = await api.post(`/api/trip-plan/votes/${tripPlanType}`, formData);
  return response.data;
};
