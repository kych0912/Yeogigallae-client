import CalendarTabs from "./CalendarTabs";
import CalendarDays from "./CalendarDays";
import YearMonthPicker from "./YearMonthPicker";

interface CalendarHeaderProps {
  activeTab: "date" | "flexible";
  setActiveTab: (tab: "date" | "flexible") => void;
  onMonthSelect: (selected: boolean) => void; 
}

export default function CalendarHeader({ activeTab, onMonthSelect }: CalendarHeaderProps) {
  return (
    <>
      <CalendarTabs activeTab={activeTab} />

      {activeTab === "flexible" && <CalendarDays />}

      {activeTab !== "flexible" && (
        <YearMonthPicker onMonthSelect={(selected) => onMonthSelect(selected)} />
      )}
    </>
  );
}
