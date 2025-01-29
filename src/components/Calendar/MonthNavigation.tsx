import * as S from "./CalendarHeader.styles";
import { MonthNavigationProps } from "./types/types"

export default function MonthNavigation({
  currentYear,
  currentMonth,
}: MonthNavigationProps) {
  return (
    <S.MonthHeader>
      <S.CurrentMonth>
        {`${currentYear}년 ${currentMonth}월`}
      </S.CurrentMonth>
    </S.MonthHeader>
  );
}
