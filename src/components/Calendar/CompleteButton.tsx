import { useState } from "react";
import * as S from "./CompleteButton.styles";
import { Button } from "../Button";
import { showToastWithMessage, isCompleteEnabled } from "./utils/Complete.utils";
import { CompleteButtonProps } from "./types/types";

export default function CompleteButton({
  startDate,
  endDate,
  mode,
  onComplete,
}: CompleteButtonProps) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCompleteClick = () => {
    if (!startDate || !endDate) {
      if (mode !== "flexible") {
        showToastWithMessage(setShowToast, setToastMessage, "날짜를 제대로 설정해주세요");
        return;
      }
    }

    if (mode !== "flexible" && (!startDate || !endDate)) {
      showToastWithMessage(setShowToast, setToastMessage, "유연한 선택을 설정해주세요");
      return;
    }

    onComplete();
  };

  return (
    <S.Footer>
      <Button
        size="large"
        onClick={handleCompleteClick}
        disabled={!isCompleteEnabled(startDate, endDate, mode)}
      >
        {"완료"}
      </Button>

      {/* 토스트 메시지 */}
      {showToast && <S.Toast>{toastMessage}</S.Toast>}
    </S.Footer>
  );
}
