import React from "react";
import * as S from "./CalendarHeader.styles";

interface MonthNavigationProps {
  currentYear: number;
  currentMonth: number;
  // onPrevMonth: () => void;
  // onNextMonth: () => void;
  onOpenPicker: () => void;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({
  currentYear,
  currentMonth,
  onOpenPicker,
}) => {
  return (
    <S.MonthHeader>
      {/* {currentMonth !== 0 && (
        // <S.NavButton onClick={onPrevMonth}>{'<'}</S.NavButton>
      )} */}
      <S.CurrentMonth onClick={onOpenPicker}>
        {`${currentYear}년 ${currentMonth + 1}월`}
      </S.CurrentMonth>
      {/* <S.NavButton onClick={onNextMonth}>{'>'}</S.NavButton> */}
    </S.MonthHeader>
  );
};

export default MonthNavigation;
