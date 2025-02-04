import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTripPlanQuery } from "../../../../../react-query/queries/functionalQueries/useTripDetailQuery";
import { VoteFormData } from "./voteFromSchma";

export default function useTripPlanFetcher(form: UseFormReturn<VoteFormData>, tripPlanId: number) {
  console.log("🔹 API 요청 시작, tripPlanId:", tripPlanId); 

  if (tripPlanId === 22) return { isLoading: false };

  const { data: tripPlanData, isLoading, error } = useTripPlanQuery(tripPlanId);

  useEffect(() => {
    if (tripPlanData?.result) {
      console.log("GET test", tripPlanData.result);

      const tripPlanType = tripPlanData.result.tripPlanType || "VOTE";

      form.reset({
        id: tripPlanData.result.id,
        name: tripPlanData.result.name,
        location: tripPlanData.result.location,
        startDate: tripPlanData.result.startDate,
        endDate: tripPlanData.result.endDate,
        tripType: tripPlanData.result.tripType,
        voteLimitTime: tripPlanData.result.voteLimitTime,
        minDays: tripPlanData.result.minDays,
        maxDays: tripPlanData.result.maxDays,
        groupName: tripPlanData.result.groupName,
        price: tripPlanData.result.price || "",
        imageUrl: tripPlanData.result.imageUrl,
        tripPlanType, 
        description_VOTE: tripPlanType === "VOTE" ? tripPlanData.result.description || "" : "",
        description_COURSE: tripPlanType === "COURSE" ? tripPlanData.result.description || "" : "", 
      });
    }
  }, [tripPlanData, form, error]);

  return { isLoading };
}
