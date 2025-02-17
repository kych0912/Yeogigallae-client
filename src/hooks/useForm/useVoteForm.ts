import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voteFormSchema, VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { useCalendar } from "../../components/Calendar/context/CalendarContext";

export const useVoteForm = (tripPlanType: "COURSE" | "SCHEDULE", roomId: number) => {
  const storageKey = `voteForm_${tripPlanType}_${roomId}`;
  const { startDate, endDate } = useCalendar();

  const formatToKST = (date: Date | null) =>
    date ? date.toLocaleDateString("ko-KR").replace(/\. /g, "-").replace(".", "").trim() : "";

  const savedFormData = localStorage.getItem(storageKey);
  const parsedData = savedFormData ? JSON.parse(savedFormData) : null;

  const defaultValues: VoteFormData = {
    location: parsedData?.location || "",
    startDate: parsedData?.startDate || formatToKST(startDate),
    endDate: parsedData?.endDate || formatToKST(endDate),
    tripType: parsedData?.tripType || "DOMESTIC",
    voteLimitTime: parsedData?.voteLimitTime || "",
    minDays: parsedData?.minDays || 1,
    maxDays: parsedData?.maxDays || 7,
    roomId,
    imageUrl: parsedData?.imageUrl || "",
    tripPlanType,
    scheduleDetails:
      tripPlanType === "SCHEDULE" ? parsedData?.scheduleDetails || { message: "", price: "" } : { message: "", price: "" }, 
    courseDetails:
      tripPlanType === "COURSE" ? parsedData?.courseDetails || { message: "" } : { message: "" },
    latitude: tripPlanType === "SCHEDULE" ? parsedData?.latitude ?? 0 : undefined,
    longitude: tripPlanType === "SCHEDULE" ? parsedData?.longitude ?? 0 : undefined,
  };

  const {
    control,
    setValue,
    watch,
    getValues,
    reset, 
    formState: { isValid },
  } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [tripPlanType, reset]);

  useEffect(() => {
    const newStartDate = formatToKST(startDate);
    const newEndDate = formatToKST(endDate);

    if (getValues("startDate") !== newStartDate) {
      setValue("startDate", newStartDate);
    }
    if (getValues("endDate") !== newEndDate) {
      setValue("endDate", newEndDate);
    }
  }, [startDate, endDate, setValue, getValues]);

  watch((values) => {
    if (values.tripPlanType === tripPlanType) {
      localStorage.setItem(storageKey, JSON.stringify(values));
    }
  });

  return { control, setValue, watch, getValues, reset, isValid };
};
