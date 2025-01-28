import { useState } from "react";
import CalendarTabs from "./CalendarTabs";
import CalendarDays from "./CalendarDays";
import YearMonthPicker from "./YearMonthPicker";
import { CalendarHeaderProps } from "./types/types";

export default function CalendarHeader({
  currentYear,
  currentMonth,
  setCurrentDate,
  onModeChange,
  startDate,
  endDate,
  handleDayClick,
  handleYearMonthSelect,
}: CalendarHeaderProps) {
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date");
  const [isStartAndEnd, setIsStartAndEnd] = useState(false); 

  const handleTabChange = (tab: "date" | "flexible") => {
    setActiveTab(tab);
    onModeChange(tab);
  };

  const handleStateChange = (isStartAndEnd: boolean) => {
    setIsStartAndEnd(isStartAndEnd);
  };

  return (
    <>
      <CalendarTabs activeTab={activeTab} onTabChange={handleTabChange} isStartAndEnd={isStartAndEnd} />

      {activeTab === "flexible" && (
        <CalendarDays
          year={currentYear}
          month={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onDayClick={handleDayClick}
          setCurrentDate={setCurrentDate}
          onStateChange={handleStateChange}
        />
      )}

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
}
