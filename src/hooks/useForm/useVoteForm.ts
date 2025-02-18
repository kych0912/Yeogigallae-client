import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voteFormSchema, VoteFormData } from "../../pages/Functional/schemas/VoteFormSchema";
import { useCalendar } from "../../components/Calendar/context/CalendarContext";

export const useVoteForm = (tripPlanType: "COURSE" | "SCHEDULE", roomId: number) => {
  const storageKey = `voteForm_${tripPlanType}_${roomId}`;
  const dateStorageKey = `voteForm_${tripPlanType}_${roomId}_dates`;

  const { startDate: calendarStart, endDate: calendarEnd } = useCalendar();

  const formatToKST = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/\. /g, "-").replace(".", "").trim();
  };

  // ✅ 최신 날짜 데이터를 가져오는 함수
  const getStoredDates = () => {
    const savedDates = localStorage.getItem(dateStorageKey);
    return savedDates ? JSON.parse(savedDates) : null;
  };

  // ✅ 최신 폼 데이터를 가져오는 함수
  const getStoredData = () => {
    const savedFormData = localStorage.getItem(storageKey);
    return savedFormData ? JSON.parse(savedFormData) : null;
  };

  const storedData = getStoredData();
  const storedDates = getStoredDates();

  const defaultValues: VoteFormData = {
    location: storedData?.location || "",
    startDate: storedDates?.startDate || formatToKST(calendarStart),
    endDate: storedDates?.endDate || formatToKST(calendarEnd),
    tripType: storedData?.tripType || "DOMESTIC",
    voteLimitTime: storedData?.voteLimitTime || "",
    minDays: storedData?.minDays || 1,
    maxDays: storedData?.maxDays || 7,
    roomId,
    imageUrl: storedData?.imageUrl || "",
    tripPlanType,
    scheduleDetails: tripPlanType === "SCHEDULE" ? storedData?.scheduleDetails || { message: "", price: "" } : undefined,
    courseDetails: tripPlanType === "COURSE" ? storedData?.courseDetails || { message: "" } : undefined,
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
    const newStoredDates = getStoredDates();

    setTimeout(() => {
      reset({
        ...defaultValues,
        startDate: newStoredDates?.startDate || formatToKST(calendarStart),
        endDate: newStoredDates?.endDate || formatToKST(calendarEnd),
      });

      // ✅ UI 즉시 반영
      setValue("startDate", newStoredDates?.startDate || formatToKST(calendarStart));
      setValue("endDate", newStoredDates?.endDate || formatToKST(calendarEnd));
      trigger(["startDate", "endDate"]); // ✅ UI 업데이트 및 유효성 검증 실행
    }, 0);
  }, [tripPlanType]);

  // ✅ 날짜 변경 시 즉시 반영 + 최신 `localStorage` 동기화
  useEffect(() => {
    const newStartDate = formatToKST(calendarStart);
    const newEndDate = formatToKST(calendarEnd);
    const storedDates = getStoredDates();

    if (storedDates?.startDate !== newStartDate || storedDates?.endDate !== newEndDate) {
      const updatedDates = { startDate: newStartDate, endDate: newEndDate };
      
      localStorage.setItem(dateStorageKey, JSON.stringify(updatedDates));

      setTimeout(() => {
        // ✅ `setValue()`와 `trigger()`를 사용하여 UI 즉시 반영
        setValue("startDate", newStartDate);
        setValue("endDate", newEndDate);
        trigger(["startDate", "endDate"]);
      }, 0);
    }
  }, [calendarStart, calendarEnd, tripPlanType, setValue, trigger]);

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(storageKey, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch, storageKey]);

  const onSubmit = handleSubmit((data) => {
    console.log("✅ 유효한 데이터 제출:", data);
  });

  return { control, setValue, getValues, watch, reset, isValid, onSubmit };
};
