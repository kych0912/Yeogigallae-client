import { useState } from "react";
import * as S from "../Calendar/Calender.styles";
import CalendarHeader from "./CalendarHeader";
import CompleteButton from "./CompleteButton";
import { useCalendar } from "./context/CalendarContext";

interface CalendarProps {
  onComplete: (date: { startDate: string; endDate: string }) => void;
  onMonthSelect: (selected: boolean) => void; // ✅ 추가
  isMonthSelected: boolean; // ✅ 추가
}

export default function Calendar({
  onComplete,
  onMonthSelect,
  isMonthSelected, // ✅ 추가
}: CalendarProps) {
  const { startDate, endDate } = useCalendar();
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date");

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleComplete = () => {
    onComplete({ startDate: formatDate(startDate), endDate: formatDate(endDate) });
  };

  return (
    <S.StyledCard>
      <CalendarHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onMonthSelect={onMonthSelect} 
      />
      <CompleteButton 
        onComplete={handleComplete} 
        onTabChange={setActiveTab} 
        isMonthSelected={isMonthSelected}
      />
    </S.StyledCard>
  );
}
