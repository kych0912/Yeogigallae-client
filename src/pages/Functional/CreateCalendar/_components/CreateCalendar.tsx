import Calendar from "../../../../components/Calendar/Calendar";
import { useCalendar } from "../../../../components/Calendar/context/CalendarContext";
import { useEffect } from "react";

export default function CreateCalendar({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <>
      <CalendarWrapper onNext={onNext} />
    </>
  );
}

function CalendarWrapper({ onNext }: { onNext: () => void }) {
  const { resetCalendar, setStartDate, setEndDate } = useCalendar();

  useEffect(() => {
    resetCalendar();
  }, []);

  const handleComplete = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
    const formattedStartDate = new Date(startDate).toLocaleDateString("ko-KR").replace(/. /g, "-").replace(".", "").trim();
    const formattedEndDate = new Date(endDate).toLocaleDateString("ko-KR").replace(/. /g, "-").replace(".", "").trim();
  
    setStartDate(new Date(startDate));
    setEndDate(new Date(endDate));
  
    localStorage.setItem("calendarStartDate", formattedStartDate);
    localStorage.setItem("calendarEndDate", formattedEndDate);
    window.dispatchEvent(new Event("storage")); 
  
    onNext();
  };
  

  return <Calendar onComplete={handleComplete} />;
}
