import { useState } from "react";
import * as S from "../Calendar/Calender.styles";
import CalendarHeader from "./CalendarHeader";
import CompleteButton from "./CompleteButton";

export default function Calendar({ onComplete }: { onComplete: () => void }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [mode, setMode] = useState<"date" | "flexible">("date");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handleDayClick = (date: Date) => {
    if (startDate && date.getTime() === startDate.getTime() && !endDate) {
      setStartDate(null);
      return;
    }
  
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (!endDate) {
        if (date.getTime() === startDate.getTime()) {
          return; 
        }
  
        if (date > startDate) {
          setEndDate(date);
        } else {
          setEndDate(startDate);
          setStartDate(date);
        }
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    }
  };
  

  const handleYearMonthSelect = (year: number, month: number) => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleModeChange = (newMode: "date" | "flexible") => {
    setMode(newMode);
  };

  return (
    <S.StyledCard>
      <CalendarHeader
        currentYear={year}
        currentMonth={month + 1}
        setCurrentDate={setCurrentDate}
        onModeChange={handleModeChange}
        startDate={startDate}
        endDate={endDate}
        handleDayClick={handleDayClick}
        handleYearMonthSelect={handleYearMonthSelect}
      />

      <CompleteButton
        startDate={startDate}
        endDate={endDate}
        mode={mode}
        onComplete={onComplete}
      />
    </S.StyledCard>
  );
}
