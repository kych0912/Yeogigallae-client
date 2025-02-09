import { useMutation } from "@tanstack/react-query";
import { postVoteForm } from "../../../apis/functional/postVoteForm";
import { useVoteFormContext } from "../../../pages/Functional/context/VoteFormContext";
import { VoteFormBody } from "../../../pages/Functional/schemas/VoteFormSchema"; 

export const useVoteFormMutation = () => {
  const { tripPlanType } = useVoteFormContext();

  return useMutation({
    mutationFn: (formData: VoteFormBody = {} as VoteFormBody) => 
      postVoteForm({ tripPlanType, ...formData }), 
  });
};
