import React, { useState } from "react";
import CalendarTabs from "./CalendarTabs";
import CalendarDays from "./CalendarDays";
import YearMonthPicker from "./YearMonthPicker";

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onModeChange: (mode: "date" | "flexible") => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDayClick: (date: Date) => void;
  handleYearMonthSelect: (year: number, month: number) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentYear,
  currentMonth,
  setCurrentDate,
  onModeChange,
  startDate,
  endDate,
  handleDayClick,
  handleYearMonthSelect,
}) => {
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date");

  const handleTabChange = (tab: "date" | "flexible") => {
    setActiveTab(tab);
    onModeChange(tab);
  };

  return (
    <>
      {/* 상단 탭 */}
      <CalendarTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* flexible 모드: 달력 */}
      {activeTab === "flexible" && (
        <CalendarDays
          year={currentYear}
          month={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onDayClick={handleDayClick}
          setCurrentDate={setCurrentDate}
        />
      )}

      {/* 그 외 모드: YearMonthPicker */}
      {activeTab !== "flexible" && (
        <YearMonthPicker
          currentYear={currentYear}
          currentMonth={currentMonth}
          onSelectYear={(year) => setCurrentDate(new Date(year, currentMonth - 1, 1))}
          onSelectMonth={(month) => setCurrentDate(new Date(currentYear, month - 1, 1))}
          onSelect={handleYearMonthSelect}
          closePicker={() => {}}
        />
      )}
    </>
  );
};

export default CalendarHeader;
