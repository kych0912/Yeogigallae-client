import Calendar from "../../../../components/Calendar/Calendar";
import { CalendarProvider, useCalendar } from "../../../../components/Calendar/context/CalendarContext";
import { useEffect } from "react";

export default function CreateCalendar({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <CalendarProvider>
      <CalendarWrapper onNext={onNext} />
    </CalendarProvider>
  );
}

function CalendarWrapper({ onNext }: { onNext: () => void }) {
  const { resetCalendar } = useCalendar();

  useEffect(() => {
    resetCalendar(); 
  }, []);

  return <Calendar onComplete={onNext} />;
}
