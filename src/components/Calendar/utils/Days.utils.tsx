// 특정 날짜가 범위 내에 있는지
export const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null): boolean => {
  if (!startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};

// 특정 날짜가 시작 날짜인지
export const isStartDate = (date: Date, startDate: Date | null): boolean => {
  return startDate?.getTime() === date.getTime();
};

// 특정 날짜가 종료 날짜인지
export const isEndDate = (date: Date, endDate: Date | null): boolean => {
  return endDate?.getTime() === date.getTime();
};

// 날짜 객체
export const createDateFromDay = (year: number, month: number, day: number): Date => {
  return new Date(year, month, day);
};
