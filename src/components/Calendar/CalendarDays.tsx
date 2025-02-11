import * as S from "./CalendarDays.styles";
import { getDaysInMonth, getWeekDays } from "./utils/Calendar.utils";
import { isDateInRange, isStartDate, isEndDate, createDateFromDay } from "./utils/Days.utils";
import { useCalendar } from "./context/CalendarContext";
import Card from "../Card";

export default function CalendarDays() {
  const { currentDate, startDate, endDate, setStartDate, setEndDate, setCurrentDate } = useCalendar();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const daysInMonth = getDaysInMonth(year, month);
  const weekDays = getWeekDays();

  const handleDayClick = (day: typeof daysInMonth[number]) => {
    const targetDate = createDateFromDay(day.year, day.month, day.date);

    if (day.month !== month || day.year !== year) {
      setCurrentDate(targetDate);
    }

    if (targetDate.getTime() === startDate?.getTime()) {
      setStartDate(null);
      return;
    }
    if (targetDate.getTime() === endDate?.getTime()) {
      setEndDate(null);
      return;
    }

    if (!startDate || (startDate && endDate)) {
      setStartDate(targetDate);
      setEndDate(null);
    } else {
      if (targetDate > startDate) {
        const maxSelectableDate = new Date(startDate);
        maxSelectableDate.setDate(startDate.getDate() + 7);
        if (targetDate > maxSelectableDate) return; 
        setEndDate(targetDate);
      } 
      else {
        const minSelectableDate = new Date(startDate);
        minSelectableDate.setDate(startDate.getDate() - 7);
        if (targetDate < minSelectableDate) return;
        setEndDate(startDate);
        setStartDate(targetDate);
      }
    }
  };

  return (
    <>
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
              $isStart={isStartDate(createDateFromDay(day.year, day.month, day.date), startDate)}
              $isEnd={isEndDate(createDateFromDay(day.year, day.month, day.date), endDate)}
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
