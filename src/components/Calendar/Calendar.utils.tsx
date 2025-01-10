export const getDaysInMonth = (year: number, month: number) => {
  const days = [];
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 이전 달 날짜 추가
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: prevMonthLastDate - i,
      year: prevYear,
      month: prevMonth,
      isToday: false,
      isCurrentMonth: false,
      isPreviousMonth: true,
      isNextMonth: false,
    });
  }

  // 현재 달 날짜 추가
  for (let i = 1; i <= lastDate; i++) {
    days.push({
      date: i,
      year,
      month,
      isToday: today.getFullYear() === year && today.getMonth() === month && today.getDate() === i,
      isCurrentMonth: true,
      isPreviousMonth: false,
      isNextMonth: false,
    });
  }

  // 다음 달 날짜 추가
  const nextMonthDays = 7 - (days.length % 7);
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  for (let i = 1; i <= nextMonthDays; i++) {
    days.push({
      date: i,
      year: nextYear,
      month: nextMonth,
      isToday: false,
      isCurrentMonth: false,
      isPreviousMonth: false,
      isNextMonth: true, // 다음 달임을 표시
    });
  }

  return days;
};

export const getWeekDays = () => ["S", "M", "T", "W", "T", "F", "S"];
