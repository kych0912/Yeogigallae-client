import { useMutation } from "@tanstack/react-query";
import { postVoteForm } from "../../../apis/functional/postVoteForm";
import { VoteFormData } from "../../../pages/Functional/schemas/VoteFormSchema";
import { useVoteFormContext } from "../../../pages/Functional/context/VoteFormContext";

export const useVoteFormMutation = () => {
  const { tripPlanType } = useVoteFormContext();

  return useMutation({
    mutationFn: async (formData: VoteFormData) => {
      return await postVoteForm(formData, tripPlanType); 
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
