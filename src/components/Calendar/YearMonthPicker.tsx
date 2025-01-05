import React, { useRef, useEffect } from "react";
import * as S from "./YearMonthPicker.styles";

interface YearMonthPickerProps {
  currentYear: number;
  currentMonth: number;
  onSelect: (year: number, month: number) => void;
  closePicker: () => void;
}

const YearMonthPicker: React.FC<YearMonthPickerProps> = ({
  currentYear,
  currentMonth,
  onSelect,
  closePicker,
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        closePicker();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePicker]);

  return (
    <S.YearMonthPickerWrapper ref={pickerRef}>
      <S.YearMonthSelect>
        {[...Array(5)].map((_, yearOffset) => (
          <div key={yearOffset}>
            <S.Year>{currentYear + yearOffset}년</S.Year>
            <S.MonthRow>
              {[...Array(12)].map((_, monthIndex) => (
                <S.MonthButton
                  key={monthIndex}
                  isCurrent={currentYear + yearOffset === currentYear && monthIndex === currentMonth}
                  onClick={() => {
                    onSelect(currentYear + yearOffset, monthIndex);
                    closePicker();
                  }}
                >
                  {monthIndex + 1}월
                </S.MonthButton>
              ))}
            </S.MonthRow>
          </div>
        ))}
      </S.YearMonthSelect>
    </S.YearMonthPickerWrapper>
  );
};

export default YearMonthPicker;
