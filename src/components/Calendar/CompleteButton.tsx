import { useState, useEffect } from "react";
import * as S from "./CompleteButton.styles";
import { Button } from "../Button";
import { showToastWithMessage } from "./utils/Complete.utils";
import { useCalendar } from "./context/CalendarContext";

export default function CompleteButton({
  onComplete,
  onTabChange,
  isMonthSelected,
}: {
  onComplete: (date: { startDate: string; endDate: string }) => void;
  onTabChange: (tab: "date" | "flexible") => void;
  isMonthSelected: boolean;
}) {
  const { startDate, endDate, mode } = useCalendar();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // ✅ "날짜 모드"일 경우: 월이 선택되면 버튼 활성화
    // ✅ "유연한 선택 모드"일 경우: 날짜가 모두 선택되면 버튼 활성화
    setIsButtonEnabled(mode === "date" ? isMonthSelected : !!(startDate && endDate));
  }, [startDate, endDate, isMonthSelected, mode]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleCompleteClick = () => {
    if (mode === "date") {
      onTabChange("flexible");
    } else {
      if (!startDate || !endDate) {
        showToastWithMessage(setShowToast, setToastMessage, "날짜를 선택해주세요");
        return;
      }
      onComplete({ startDate: formatDate(startDate), endDate: formatDate(endDate) });
    }
  };

  return (
    <S.Footer>
      <Button size="large" onClick={handleCompleteClick} disabled={!isButtonEnabled}>
        {mode === "flexible" ? "완료" : "다음으로"}
      </Button>

      {showToast && <S.Toast>{toastMessage}</S.Toast>}
    </S.Footer>
  );
}
