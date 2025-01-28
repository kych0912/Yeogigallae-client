import { useState } from "react";
import CreateCalendar from "./_components/CreateCalendar";

export default function Overview() {
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleNext = () => {
    setSuccessMessage("일정이 성공적으로 설정되었습니다!");
  };

  return (
    <>
      <CreateCalendar onNext={handleNext} />
      {successMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
      )}
    </>
  );
}
