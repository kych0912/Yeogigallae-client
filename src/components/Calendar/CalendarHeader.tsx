import { useState } from "react";
import CalendarTabs from "./CalendarTabs";
import CalendarDays from "./CalendarDays";
import YearMonthPicker from "./YearMonthPicker";
import CompleteButton from "./CompleteButton";
import MonthNavigation from "./MonthNavigation";

interface CalendarHeaderProps {
  activeTab: "date" | "flexible";
  setActiveTab: (tab: "date" | "flexible") => void;
}

export default function CalendarHeader({ activeTab, setActiveTab }: CalendarHeaderProps) {
  const [isMonthSelected, setIsMonthSelected] = useState(false);

  return (
    <>
      <CalendarTabs activeTab={activeTab} />
      <MonthNavigation />

      {activeTab === "flexible" && <CalendarDays />}

      {activeTab !== "flexible" && (
        <YearMonthPicker onMonthSelect={(selected) => setIsMonthSelected(selected)} />
      )}

      <CompleteButton
        onComplete={(dates) => console.log("선택한 날짜:", dates)}
        onTabChange={setActiveTab}
        isMonthSelected={isMonthSelected}
        activeTab={activeTab}
      />
    </>
  );
}
