import React, { useState } from "react";
import * as S from "./Calender.styles";
import CalendarHeader from "./CalendarHeader";
import YearMonthPicker from "./YearMonthPicker";
import CompleteButton from "./CompleteButton";

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isYearMonthPickerVisible, setYearMonthPickerVisible] = useState(false);
  const [mode, setMode] = useState<"date" | "flexible">("date");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handleDateClick = (date: Date) => {
    if (mode === "flexible") {
      console.log("유연한 선택 모드에서는 날짜를 클릭할 수 없습니다.");
      return;
    }
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
      }
    }
  };

  const handleYearMonthSelect = (selectedYear: number, selectedMonth: number) => {
    setCurrentDate(new Date(selectedYear, selectedMonth, 1));
    setYearMonthPickerVisible(false);
  };

  const handleModeChange = (newMode: "date" | "flexible") => {
    setMode(newMode);
    console.log(`Mode changed to: ${newMode}`);
  };

  return (
    <S.CalendarWrapper>
      {isYearMonthPickerVisible && (
        <YearMonthPicker
          currentMonth={month}
          currentYear={year}
          onSelect={handleYearMonthSelect}
          closePicker={() => setYearMonthPickerVisible(false)}
        />
      )}

      <CalendarHeader
        currentYear={year}
        currentMonth={month}
        setCurrentDate={setCurrentDate}
        openYearMonthPicker={() => setYearMonthPickerVisible(true)}
        onModeChange={handleModeChange}
        startDate={startDate}
        endDate={endDate}
        handleDayClick={handleDateClick}
      />

      <CompleteButton />
    </S.CalendarWrapper>
  );
};

export default Calendar;
