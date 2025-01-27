import React from "react";
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
}

export default function CalendarDays({
  year,
  month,
  startDate,
  endDate,
  onDayClick,
  setCurrentDate,
}: CalendarDaysProps) {
  const daysInMonth = getDaysInMonth(year, month);
  const weekDays = getWeekDays();

  const handleDayClick = (day: typeof daysInMonth[number]) => {
    const targetDate = createDateFromDay(day.year, day.month, day.date);
    if (day.month !== month || day.year !== year) {
      setCurrentDate(targetDate);
    }

    if (!startDate || (startDate && endDate)) {
      onDayClick(targetDate);
    } else if (startDate && !endDate) {
      if (targetDate < startDate) {
        onDayClick(startDate);
        onDayClick(targetDate); 
      } else {
        onDayClick(targetDate);
      }
    }
  };

  return (
    <S.CalendarContainer>
      <S.WeekDays>
        {weekDays.map((day, index) => (
          <S.WeekDay key={`weekday-${index}`}>{day}</S.WeekDay>
        ))}
      </S.WeekDays>

      <Card.Divider />

      <S.Days>
        {daysInMonth.map((day, index) => (
          <S.Day
            key={`day-${day.year}-${day.month}-${day.date}-${index}`}
            $isToday={day.isToday || undefined}
            $isCurrentMonth={day.isCurrentMonth || undefined}
            $isInRange={
              isDateInRange(
                createDateFromDay(day.year, day.month, day.date),
                startDate,
                endDate
              ) || undefined
            }
            $isSelected={
              isStartDate(
                createDateFromDay(day.year, day.month, day.date),
                startDate
              ) ||
              isEndDate(
                createDateFromDay(day.year, day.month, day.date),
                endDate
              ) || undefined
            }
            $isStart={
              isStartDate(
                createDateFromDay(day.year, day.month, day.date),
                startDate
              ) || undefined
            }
            $isEnd={
              isEndDate(
                createDateFromDay(day.year, day.month, day.date),
                endDate
              ) || undefined
            }
            onClick={() => handleDayClick(day)}
          >
            {day.date}
          </S.Day>
        ))}
      </S.Days>
    </S.CalendarContainer>
  );
}
