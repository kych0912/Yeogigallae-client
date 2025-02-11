import { useCalendar } from "./context/CalendarContext"; 
import * as S from "./CalendarHeader.styles";

export default function MonthNavigation() {
  const { currentDate } = useCalendar();

  return (
    <S.MonthHeader>
      <S.CurrentMonth>
        {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
      </S.CurrentMonth>
    </S.MonthHeader>
  );
}
