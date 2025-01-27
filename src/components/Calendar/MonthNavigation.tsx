import React from "react";
import * as S from "./CalendarHeader.styles";

interface MonthNavigationProps {
  currentYear: number;
  currentMonth: number;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({
  currentYear,
  currentMonth,
}) => {
  return (
    <S.MonthHeader>
      <S.CurrentMonth>
        {`${currentYear}년 ${currentMonth}월`}
      </S.CurrentMonth>
    </S.MonthHeader>
  );
};

export default MonthNavigation;

