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

  const {
    control,
    setValue,
    watch,
    reset,
    getValues,
    formState: { isValid },
  } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    mode: "onChange",
    defaultValues: {
      location: "",
      startDate: formatToKST(startDate),
      endDate: formatToKST(endDate),
      tripType: "DOMESTIC",
      voteLimitTime: "",
      minDays: 1,
      maxDays: 7,
      roomId,
      imageUrl: "",
      latitude: undefined, 
      longitude: undefined, 
      scheduleDetails: { message: "", price: "" },
      courseDetails: { message: "" },
      tripPlanType,
    },
  });

  useEffect(() => {
    if (parsedData) {
      reset(parsedData);
    }
  }, [roomId, tripPlanType, reset]);

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

  useEffect(() => {
    const formData = getValues();
    const storedData = {
      ...formData,
      latitude: parsedData?.latitude || 0,
      longitude: parsedData?.longitude || 0,
    };

    localStorage.setItem(storageKey, JSON.stringify(storedData));
  }, [getValues, storageKey]);

  return { control, setValue, watch, getValues, reset, isValid };
};
