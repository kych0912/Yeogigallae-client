export const showToastWithMessage = (
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
  setToastMessage: React.Dispatch<React.SetStateAction<string>>,
  message: string
): void => {
  setToastMessage(message);
  setShowToast(true);

  setTimeout(() => setShowToast(false), 3000);
};

export const isCompleteEnabled = (
  startDate: Date | null,
  endDate: Date | null,
  mode: "date" | "flexible"
): boolean => {
  return (
    (!!startDate && !!endDate) || // 날짜 범위가 설정된 경우
    mode === "flexible" // 유연한 선택이 설정된 경우
  );
};
