import { useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";
import { useCalendar } from "./context/CalendarContext";
import { Toast } from "./CompleteButton.styles";
import YearSwiper from "./YearSwiper/YearSwiper";

interface YearMonthPickerProps {
  onMonthSelect: (selected: boolean) => void;
}

export default function YearMonthPicker({ onMonthSelect }: YearMonthPickerProps) {
  const { currentDate, setCurrentDate } = useCalendar();
  const baseYear = 2023;
  const initialYear = 2025;
  const [years] = useState<number[]>(Array.from({ length: 45 }, (_, i) => baseYear + i));
  const [showToast, setShowToast] = useState(false);
  const now = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const handleYearChange = (year: number) => {
    setCurrentDate(new Date(year, currentMonth - 1, 1));
  };

  const handleMonthChange = (month: number) => {
    if (
      currentYear < now.getFullYear() || 
      (currentYear === now.getFullYear() && month < now.getMonth() + 1)
    ) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }
    setCurrentDate(new Date(currentYear, month - 1, 1));
    onMonthSelect(true);
  };

  useEffect(() => {
    if (currentYear < baseYear) {
      setCurrentDate(new Date(baseYear, currentMonth - 1, 1));
    }
  }, [currentYear, currentMonth, setCurrentDate]);

  return (
    <>
      <S.Wrapper>
        <YearSwiper
          years={years}
          currentYear={currentYear}
          initialYear={initialYear}
          onYearChange={handleYearChange}
        />

        <S.MonthGrid>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <S.MonthItem
              key={month}
              $selected={month === currentMonth}
              $disabled={
                currentYear < now.getFullYear() ||
                (currentYear === now.getFullYear() && month < now.getMonth() + 1)
              }
              onClick={() => handleMonthChange(month)}
            >
              {month}월
            </S.MonthItem>
          ))}
        </S.MonthGrid>
      </S.Wrapper>

      {showToast && <Toast>이전 달은 선택할 수 없습니다!</Toast>}
    </>
  );
}
