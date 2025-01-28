import Calendar from "../../../../components/Calendar/Calendar";

export default function CreateCalendar({
  onNext,
}: {
  onNext: () => void; 
}) {
  return (
    <>
      <Calendar onComplete={onNext} /> 
    </>
  );
}

