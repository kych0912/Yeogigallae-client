import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CompleteButton.styles";
import { Button } from "../Button";
import { showToastWithMessage } from "./utils/Complete.utils";
import { useCalendar } from "./context/CalendarContext";
import { useFormContext } from "react-hook-form";

export default function CompleteButton({
  onTabChange,
  isMonthSelected,
  activeTab,
}: {
  onComplete: (date: { startDate: string; endDate: string }) => void;
  onTabChange: (tab: "date" | "flexible") => void;
  isMonthSelected: boolean;
  activeTab: "date" | "flexible";
}) {
  const navigate = useNavigate();
  const { startDate, endDate } = useCalendar();
  let formContext;
  try {
    formContext = useFormContext();
  } catch (error) {
    formContext = null;
  }

  const { setValue } = formContext || {};
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(activeTab === "date" ? isMonthSelected : !!(startDate && endDate));
  }, [startDate, endDate, isMonthSelected, activeTab]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleCompleteClick = () => {
    if (activeTab === "date") {
      onTabChange("flexible");
      return;
    }

    if (!startDate || !endDate) {
      showToastWithMessage(setShowToast, setToastMessage, "날짜를 선택해주세요");
      return;
    }

    if (setValue) {
      setValue("startDate", formatDate(startDate));
      setValue("endDate", formatDate(endDate));
    }

    localStorage.setItem("voteForm_startDate", formatDate(startDate));
    localStorage.setItem("voteForm_endDate", formatDate(endDate));
    navigate(-1);
  };

  return (
    <S.Footer>
      {isButtonEnabled && activeTab === "date" && (
        <Button size="large" onClick={handleCompleteClick}>
          다음으로
        </Button>
      )}

      {isButtonEnabled && activeTab === "flexible" && (
        <Button size="large" onClick={handleCompleteClick}>
          완료
        </Button>
      )}

      {showToast && <S.Toast>{toastMessage}</S.Toast>}
    </S.Footer>
  );
}
