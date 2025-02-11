import CalendarTabs from "./CalendarTabs";
import CalendarDays from "./CalendarDays";
import YearMonthPicker from "./YearMonthPicker";
import MonthNavigation from "./MonthNavigation";

interface CalendarHeaderProps {
  activeTab: "date" | "flexible";
  setActiveTab: (tab: "date" | "flexible") => void;
  isMonthSelected: boolean; 
  setIsMonthSelected: (selected: boolean) => void;
}

export default function CalendarHeader({ activeTab, setActiveTab, setIsMonthSelected }: CalendarHeaderProps) {
  return (
    <>
      <CalendarTabs activeTab={activeTab} />
      <MonthNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "flexible" && <CalendarDays />}

      {activeTab !== "flexible" && (
        <YearMonthPicker onMonthSelect={setIsMonthSelected} /> 
      )}
    </>
  );
}
