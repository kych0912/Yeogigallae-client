import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voteFormSchema, VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { useCalendar } from "../../components/Calendar/context/CalendarContext";
import { useSearch } from "../../pages/Functional/context/SearchContext"; 

export const useVoteForm = (tripPlanType: "COURSE" | "SCHEDULE", roomId: number) => {
  const storageKey = `voteForm_${tripPlanType}_${roomId}`;
  const dateStorageKey = `voteForm_${tripPlanType}_${roomId}_dates`;
  const { startDate: calendarStart, endDate: calendarEnd } = useCalendar();
  const { selectedPlace } = useSearch();

  const formatToKST = (date: Date | null): string => {
    if (!date) return "";
    return date
      .toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\. /g, "-").replace(".", "").trim();
  };

  const getStoredDates = () => {
    const savedDates = localStorage.getItem(dateStorageKey);
    return savedDates ? JSON.parse(savedDates) : null;
  };

  const getStoredData = () => {
    const savedFormData = localStorage.getItem(storageKey);
    return savedFormData ? JSON.parse(savedFormData) : null;
  };

  const storedData = getStoredData();
  const storedDates = getStoredDates();

  const defaultValues: VoteFormData = {
    location: storedData?.location || null,
    latitude: storedData?.latitude ?? null,
    longitude: storedData?.longitude ?? null,
    startDate: storedDates?.startDate || formatToKST(calendarStart),
    endDate: storedDates?.endDate || formatToKST(calendarEnd),
    tripType: storedData?.tripType || "DOMESTIC",
    voteLimitTime: storedData?.voteLimitTime || null,
    roomId,
    imageUrl: storedData?.imageUrl || null,
    tripPlanType,
    scheduleDetails:
      tripPlanType === "SCHEDULE"
        ? storedData?.scheduleDetails || { message: null, price: null }
        : null,
    courseDetails:
      tripPlanType === "COURSE"
        ? storedData?.courseDetails || { message: null }
        : null,
  };  

  const { control, setValue, getValues, reset, watch, handleSubmit, trigger, formState: { isValid }, } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    const newStoredDates = getStoredDates();

    reset({
      ...defaultValues,
      startDate: newStoredDates?.startDate || formatToKST(calendarStart),
      endDate: newStoredDates?.endDate || formatToKST(calendarEnd),
    });
    setValue("startDate", newStoredDates?.startDate || formatToKST(calendarStart));
    setValue("endDate", newStoredDates?.endDate || formatToKST(calendarEnd));
    trigger(["startDate", "endDate"]);
  }, [tripPlanType, roomId]);

  useEffect(() => {
    const newStartDate = formatToKST(calendarStart);
    const newEndDate = formatToKST(calendarEnd);
    const storedDates = getStoredDates();

    if (storedDates?.startDate !== newStartDate || storedDates?.endDate !== newEndDate) {
      const updatedDates = { startDate: newStartDate, endDate: newEndDate };

      localStorage.setItem(dateStorageKey, JSON.stringify(updatedDates));
      
      setTimeout(() => {
        setValue("startDate", newStartDate);
        setValue("endDate", newEndDate);
        trigger(["startDate", "endDate"]);
      }, 0);
    }
  }, [calendarStart, calendarEnd, tripPlanType, setValue, trigger]);

  useEffect(() => {
    if (selectedPlace) {
      setValue("location", selectedPlace.place_name);
      setValue("latitude", parseFloat(selectedPlace.y)); 
      setValue("longitude", parseFloat(selectedPlace.x));
      trigger(["location", "latitude", "longitude"]);
    }
  }, [selectedPlace, setValue, trigger]);

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(storageKey, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch, storageKey]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { control, setValue, getValues, watch, reset,  isValid, onSubmit };
};
