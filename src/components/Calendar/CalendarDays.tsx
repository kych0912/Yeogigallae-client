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

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isStart = (date: Date) => {
    return startDate?.getTime() === date.getTime();
  };

  const isEnd = (date: Date) => {
    return endDate?.getTime() === date.getTime();
  };

  return (
    <S.CalendarContainer>
      <S.WeekDays>
        {weekDays.map((day) => (
          <S.WeekDay key={day}>{day}</S.WeekDay>
        ))}
      </S.WeekDays>

      <S.Days>
        {daysInMonth.map((day, index) => (
          <S.Day
            key={index}
            isToday={day.isToday}
            isCurrentMonth={day.isCurrentMonth}
            isInRange={isInRange(new Date(day.year, day.month, day.date))}
            isSelected={
              startDate?.getTime() === new Date(day.year, day.month, day.date).getTime() ||
              endDate?.getTime() === new Date(day.year, day.month, day.date).getTime()
            }
            isStart={isStart(new Date(day.year, day.month, day.date))}
            isEnd={isEnd(new Date(day.year, day.month, day.date))}
            onClick={() => {
              const targetMonth = day.month;
              const targetYear = day.year;
          
              // 슬라이드 처리
              if (targetMonth !== month || targetYear !== year) {
                setCurrentDate(new Date(targetYear, targetMonth, 1)); // 현재 달 업데이트
              }
          
              // 날짜 선택 처리
              onDayClick(new Date(targetYear, targetMonth, day.date));
            }}
          >
            {day.date}
          </S.Day>
        ))}
      </S.Days>
    </S.CalendarContainer>
  );
};

export default CalendarDays;
