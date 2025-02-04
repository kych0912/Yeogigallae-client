import { createContext, useContext, useMemo, ReactNode, useState, useEffect } from "react";
import useVoteForm from "./useVoteForm";
import useTripPlanFetcher from "./useTripPlanFetcher"; // ✅ API 호출 Hook을 직접 사용

interface VoteFormContextType {
  form: ReturnType<typeof useVoteForm>["form"];
  isLoading: boolean;
  resetForm: ReturnType<typeof useVoteForm>["resetForm"];
  tripPlanType: "VOTE" | "COURSE"; // ✅ tripPlanType 유지
  setTripPlanType: (type: "VOTE" | "COURSE") => void;
}

export const VoteFormContext = createContext<VoteFormContextType | null>(null);

interface VoteFormProviderProps {
  children: ReactNode;
  tripPlanId: 22; // ✅ tripPlanId를 받아 API 호출
}

export default function VoteFormProvider({ children, tripPlanId }: VoteFormProviderProps) {
  const { form, resetForm } = useVoteForm();
  const [tripPlanType, setTripPlanType] = useState<"VOTE" | "COURSE">("VOTE");

  // ✅ API 호출을 여기서 실행
  const { isLoading } = useTripPlanFetcher(form, tripPlanId);

  // ✅ API에서 불러온 tripPlanType이 있으면 업데이트
  useEffect(() => {
    const fetchedTripPlanType = form.getValues("tripPlanType");
    if (fetchedTripPlanType) {
      setTripPlanType(fetchedTripPlanType as "VOTE" | "COURSE");
    }
  }, [form]);

  const value = useMemo(
    () => ({ form, isLoading, resetForm, tripPlanType, setTripPlanType }),
    [form, isLoading, resetForm, tripPlanType]
  );

  return <VoteFormContext.Provider value={value}>{children}</VoteFormContext.Provider>;
}

export function useVoteFormContext() {
  const context = useContext(VoteFormContext);
  if (!context) {
    throw new Error("useVoteFormContext must be used within a VoteFormProvider");
  }
  return context;
}
