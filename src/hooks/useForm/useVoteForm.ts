import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voteFormSchema, VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { useCalendar } from "../../components/Calendar/context/CalendarContext";
import { useSearch } from "../../pages/Functional/context/SearchContext";

export const useVoteForm = (tripPlanType: "COURSE" | "SCHEDULE", roomId: number) => {
  const storageKey = `voteForm_${tripPlanType}_${roomId}`;
  const scheduleKeyWithRoomId = `voteForm_schedule_${roomId}`; 
  const courseKey = `voteForm_course_${roomId}`;
  const dateStorageKey = `voteForm_${tripPlanType}_${roomId}_dates`;

  const { startDate: calendarStart, endDate: calendarEnd } = useCalendar();
  const { selectedPlace } = useSearch();

  const formatToKST = (date: Date | null): string => {
    if (!date) return "";
    return date
      .toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
      .replace(/\. /g, "-")
      .replace(".", "")
      .trim();
  };

  const getStoredData = (key: string) => {
    try {
      const savedData = localStorage.getItem(key);
      if (!savedData || savedData === "undefined") return null;
      return JSON.parse(savedData);
    } catch (error) {
      console.error(`Error parsing JSON from localStorage key "${key}":`, error);
      return null;
    }
  };

  const storedData = getStoredData(storageKey);
  const storedDates = getStoredData(dateStorageKey);
  const storedSchedule = getStoredData(scheduleKeyWithRoomId); 
  const storedCourse = getStoredData(courseKey);

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
    scheduleDetails: tripPlanType === "SCHEDULE" ? storedSchedule || { message: null, price: null } : null,
    courseDetails: tripPlanType === "COURSE" ? storedCourse || { message: null } : null,
  };

  const {
    control,
    setValue,
    getValues,
    reset,
    watch,
    handleSubmit,
    trigger,
    formState: { isValid },
  } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    const newSchedule = getStoredData(scheduleKeyWithRoomId);
    const newCourse = getStoredData(courseKey);
    const newDates = getStoredData(dateStorageKey);

    reset({
      ...defaultValues,
      scheduleDetails: tripPlanType === "SCHEDULE" ? newSchedule || { message: null, price: null } : null,
      courseDetails: tripPlanType === "COURSE" ? newCourse || { message: null } : null,
      startDate: newDates?.startDate || formatToKST(calendarStart),
      endDate: newDates?.endDate || formatToKST(calendarEnd),
    });

    trigger(["startDate", "endDate"]);
  }, [tripPlanType, roomId]);

  useEffect(() => {
    const newStartDate = formatToKST(calendarStart);
    const newEndDate = formatToKST(calendarEnd);
    const updatedDates = { startDate: newStartDate, endDate: newEndDate };
    localStorage.setItem(dateStorageKey, JSON.stringify(updatedDates));

    setValue("startDate", newStartDate);
    setValue("endDate", newEndDate);
    trigger(["startDate", "endDate"]);
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
      if (tripPlanType === "SCHEDULE") {
        localStorage.setItem(scheduleKeyWithRoomId, JSON.stringify(values.scheduleDetails));
      } else {
        localStorage.setItem(courseKey, JSON.stringify(values.courseDetails));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, storageKey, scheduleKeyWithRoomId, courseKey, tripPlanType]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { control, setValue, getValues, watch, reset, isValid, onSubmit };
};
