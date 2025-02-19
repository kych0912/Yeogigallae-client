import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postVoteForm } from "../../../apis/functional/postVoteForm";
import { VoteFormData } from "../../../pages/Functional/schemas/VoteFormSchema";
import { useVoteFormContext } from "../../../pages/Functional/context/VoteFormContext";

export const useVoteFormMutation = () => {
  const { tripPlanType } = useVoteFormContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: VoteFormData) => {
      return await postVoteForm(formData, tripPlanType);  
    },
    onSuccess: async (data) => {
      const tripId = data?.result?.id;
      const roomId = data?.result?.roomId;

      console.log(`tripId: ${tripId}, roomId: ${roomId}`);

      if (tripId && roomId) {
        await queryClient.refetchQueries({
          queryKey: ["tripInfo", tripId, roomId],
        });
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
