import { useState } from "react";
import * as S from "../Calendar/Calender.styles";
import CalendarHeader from "./CalendarHeader";
import CompleteButton from "./CompleteButton";
import { useCalendar } from "./context/CalendarContext";

interface CalendarProps {
  onComplete: (date: { startDate: string; endDate: string }) => void;
}

export default function Calendar({ onComplete }: CalendarProps) {
  const { startDate, endDate } = useCalendar();
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date"); 
  const [isMonthSelected, setIsMonthSelected] = useState(false); 

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleComplete = () => {
    if (!startDate || !endDate) return;
    onComplete({ startDate: formatDate(startDate), endDate: formatDate(endDate) });
  };

  return (
    <S.StyledCard>
      <CalendarHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMonthSelected={isMonthSelected} 
        setIsMonthSelected={setIsMonthSelected} 
      />
      <CompleteButton 
        onComplete={handleComplete}  
        onTabChange={setActiveTab}  
        isMonthSelected={isMonthSelected} 
        activeTab={activeTab} 
      />
    </S.StyledCard>
  );
}
