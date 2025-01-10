import React, { useState } from "react";
import * as S from "./CalendarHeader.styles";
import FlexibleSelect from "../FlexibleSelect/FlexibleSelect";
import CalendarDays from "./CalendarDays";
import CalendarTabs from "./CalendarTabs";
import MonthNavigation from "./MonthNavigation";

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  openYearMonthPicker: () => void;
  onModeChange: (mode: "date" | "flexible") => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDayClick: (date: Date) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentYear,
  currentMonth,
  setCurrentDate,
  openYearMonthPicker,
  onModeChange,
  startDate,
  endDate,
  handleDayClick,
}) => {
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date");

  // const handlePrevMonth = () => {
  //   setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  // };

  // const handleNextMonth = () => {
  //   setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  // };

  const handleTabChange = (tab: "date" | "flexible") => {
    setActiveTab(tab);
    onModeChange(tab);
  };

  // 기간 선택 함수
  const handleSelectPeriod = (period: number) => {
    console.log(`선택한 기간: ${period}박`);
  };

  // 달 선택 함수
  const handleSelectMonth = (month: Date) => {
    setCurrentDate(month);
  };

  return (
    <>
      <S.Header>
        <CalendarTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </S.Header>

      {activeTab !== "flexible" && (
        <MonthNavigation
          currentYear={currentYear}
          currentMonth={currentMonth}
          // onPrevMonth={handlePrevMonth}
          // onNextMonth={handleNextMonth}
          onOpenPicker={openYearMonthPicker}
        />
      )}

      {activeTab === "flexible" ? (
        <FlexibleSelect
          startDate={startDate}
          endDate={endDate}
          handleDayClick={handleDayClick}
          onSelectPeriod={handleSelectPeriod} // 기간 선택 함수 전달
          onSelectMonth={handleSelectMonth} // 달 선택 함수 전달
        />
      ) : (
        <CalendarDays
          year={currentYear}
          month={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onDayClick={handleDayClick}
          setCurrentDate={setCurrentDate}
        />
      )}
    </>
  );
};

export default CalendarHeader;
