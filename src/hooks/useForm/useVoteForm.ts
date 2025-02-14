import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voteFormSchema, VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { useCalendar } from "../../components/Calendar/context/CalendarContext"; 

export const useVoteForm = (tripPlanType: "COURSE" | "SCHEDULE", roomId: number) => {
  const storageKey = `voteForm_${tripPlanType}_${roomId}`;
  const { startDate, endDate } = useCalendar(); 

  const savedFormData = localStorage.getItem(storageKey);

  const formatToKST = (date: Date | null) => {
    return date 
      ? date.toLocaleDateString("ko-KR").replace(/. /g, "-").replace(".", "").trim() 
      : "";
  };

  const { control, setValue, watch, reset, getValues } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    defaultValues: savedFormData
      ? JSON.parse(savedFormData)
      : {
          location: "",
          startDate: formatToKST(startDate),  
          endDate: formatToKST(endDate),      
          tripType: "DOMESTIC",
          voteLimitTime: "",
          minDays: 1,
          maxDays: 7,
          roomId,
          imageUrl: "",
          scheduleDetails: { message: "", price: "" },
          courseDetails: { message: "" },
          tripPlanType,
        },
  });

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [roomId, tripPlanType, reset, storageKey]);

  useEffect(() => {
    const newStartDate = formatToKST(startDate);
    const newEndDate = formatToKST(endDate);

    if (getValues("startDate") !== newStartDate) {
      setValue("startDate", newStartDate);
    }
    if (getValues("endDate") !== newEndDate) {
      setValue("endDate", newEndDate);
    }
  }, [startDate, endDate, setValue]);

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(storageKey, JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [watch, storageKey]);

  return { control, setValue, watch, getValues, reset };
};