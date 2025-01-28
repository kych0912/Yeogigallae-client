import { useEffect } from "react";
import * as S from "./CalendarDays.styles";
import { getDaysInMonth, getWeekDays } from "./utils/Calendar.utils";
import { isDateInRange, isStartDate, isEndDate, createDateFromDay } from "./utils/Days.utils";
import Card from "../Card";

interface CalendarDaysProps {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onDayClick: (date: Date) => void;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onStateChange: (isStartAndEnd: boolean) => void; 
}

export default function CalendarDays({
  year,
  month,
  startDate,
  endDate,
  onDayClick,
  setCurrentDate,
  onStateChange, 
}: CalendarDaysProps) {
  const daysInMonth = getDaysInMonth(year, month);
  const weekDays = getWeekDays();

  const isStartAndEnd = !!(startDate && endDate);

  useEffect(() => {
    onStateChange(isStartAndEnd); 
  }, [isStartAndEnd, onStateChange]);

  const handleDayClick = (day: typeof daysInMonth[number]) => {
    const targetDate = createDateFromDay(day.year, day.month, day.date);

    // 다른 달로 이동
    if (day.month !== month || day.year !== year) {
      setCurrentDate(targetDate);
    }

    if (!startDate || (startDate && endDate)) {
      // 시작점이 없거나, 시작점과 끝점이 모두 선택된 경우
      onDayClick(targetDate);
    } else if (startDate && !endDate) {
      // 시작점만 선택된 경우
      if (targetDate < startDate) {
        onDayClick(targetDate); // 새 시작점으로 설정
      } else {
        onDayClick(targetDate); // 끝점으로 설정
      }
    }
  };

  return (
    <>
      {/* 현재 연도와 월 표시 */}
      <S.CurrentDate>
        {year}년 {month}월
      </S.CurrentDate>

      <S.CalendarContainer>
        {/* 요일 */}
        <S.WeekDays>
          {weekDays.map((day, index) => (
            <S.WeekDay key={`weekday-${index}`}>{day}</S.WeekDay>
          ))}
        </S.WeekDays>

        <Card.Divider />

        {/* 날짜 */}
        <S.Days>
          {daysInMonth.map((day, index) => (
            <S.Day
              key={`day-${day.year}-${day.month}-${day.date}-${index}`}
              $isToday={day.isToday}
              $isCurrentMonth={day.isCurrentMonth}
              $isInRange={isDateInRange(
                createDateFromDay(day.year, day.month, day.date),
                startDate,
                endDate
              )}
              $isSelected={
                isStartDate(createDateFromDay(day.year, day.month, day.date), startDate) ||
                isEndDate(createDateFromDay(day.year, day.month, day.date), endDate)
              }
              $isStart={isStartDate(
                createDateFromDay(day.year, day.month, day.date),
                startDate
              )}
              $isEnd={isEndDate(
                createDateFromDay(day.year, day.month, day.date),
                endDate
              )}
              onClick={() => handleDayClick(day)}
            >
              {day.date}
            </S.Day>
          ))}
        </S.Days>
      </S.CalendarContainer>
    </>
  );
}
