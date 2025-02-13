import { useCalendar } from "./context/CalendarContext"; 
import * as S from "./CalendarHeader.styles";

interface MonthNavigationProps {
  activeTab: "date" | "flexible";
  setActiveTab: (tab: "date" | "flexible") => void;
}

export default function MonthNavigation({ activeTab, setActiveTab }: MonthNavigationProps) {
  const { currentDate } = useCalendar();

  const handleMonthClick = () => {
    if (activeTab === "flexible") {
      setActiveTab("date"); 
    }
  };

  return (
    <S.MonthHeader onClick={handleMonthClick} style={{ cursor: "pointer" }}>
      <S.CurrentMonth>
        {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
      </S.CurrentMonth>
    </S.MonthHeader>
  );
}
