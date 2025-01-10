import React from "react";
import * as S from "./CalendarDays.styles";
import { getDaysInMonth, getWeekDays } from "./Calendar.utils";

interface CalendarDaysProps {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onDayClick: (date: Date) => void;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarDays: React.FC<CalendarDaysProps> = ({
  year,
  month,
  startDate,
  endDate,
  onDayClick,
  setCurrentDate,
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const weekDays = getWeekDays();

  const checkIfInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const checkIfStartDate = (date: Date) => startDate?.getTime() === date.getTime();

  const checkIfEndDate = (date: Date) => endDate?.getTime() === date.getTime();

  const handleDayClick = (day: typeof daysInMonth[number]) => {
    const targetDate = new Date(day.year, day.month, day.date);

    // 월 또는 연도가 변경되면 현재 날짜를 업데이트
    if (day.month !== month || day.year !== year) {
      setCurrentDate(new Date(day.year, day.month, 1));
    }

    onDayClick(targetDate);
  };

  return (
    <S.CalendarContainer>
      {/* 요일 헤더 */}
      <S.WeekDays>
        {weekDays.map((day, index) => (
          <S.WeekDay key={`weekday-${index}`}>{day}</S.WeekDay>
        ))}
      </S.WeekDays>

      <S.Spacer/>
      
      {/* 날짜 */}
      <S.Days>
        {daysInMonth.map((day, index) => (
          <S.Day
            key={`day-${day.year}-${day.month}-${day.date}-${index}`}
            $isToday={day.isToday} // styled-components 전용
            $isCurrentMonth={day.isCurrentMonth} // styled-components 전용
            $isInRange={checkIfInRange(new Date(day.year, day.month, day.date))} // styled-components 전용
            $isSelected={checkIfStartDate(new Date(day.year, day.month, day.date)) || checkIfEndDate(new Date(day.year, day.month, day.date))} // styled-components 전용
            $isStart={checkIfStartDate(new Date(day.year, day.month, day.date))} // styled-components 전용
            $isEnd={checkIfEndDate(new Date(day.year, day.month, day.date))} // styled-components 전용
            onClick={() => handleDayClick(day)}
          >
            {day.date}
          </S.Day>
        ))}
      </S.Days>
    </S.CalendarContainer>
  );
};

export default CalendarDays;
