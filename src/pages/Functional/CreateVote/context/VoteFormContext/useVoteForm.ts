import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import voteFormSchema, { VoteFormData } from "./voteFromSchma";

export default function useVoteForm() {
  const form = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    defaultValues: {
      id: 0,
      name: "",
      location: "",
      startDate: "0000-00-00",
      endDate: "0000-00-00",
      tripType: "",
      voteLimitTime: "",
      minDays: 0,
      maxDays: 0,
      groupName: "",
      activeButton: "CREATE", 
      price: "",
      imageUrl: "",
      tripPlanType: "",
      description: "",
    },
  });

  const resetForm = (data?: Partial<VoteFormData>) => {
    form.reset({
      ...form.getValues(),
      ...data,
    });
  };

  return { form, resetForm };
}
