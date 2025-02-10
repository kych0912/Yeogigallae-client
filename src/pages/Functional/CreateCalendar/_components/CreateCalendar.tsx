import Calendar from "../../../../components/Calendar/Calendar";
import { CalendarProvider } from "../../../../components/Calendar/context/CalendarContext";
import { useState } from "react";

export default function CreateCalendar({
  onNext,
}: {
  onNext: () => void;
}) {
  const [isMonthSelected, setIsMonthSelected] = useState(false);

  return (
    <CalendarProvider>
      <Calendar 
        onComplete={onNext} 
        onMonthSelect={setIsMonthSelected}
        isMonthSelected={isMonthSelected} 
      />
    </CalendarProvider>
  );
}
