// 프로그레스바 감싸는 헤더 컴포넌트 - flexible / date로 이동
export interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onModeChange: (mode: "date" | "flexible") => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDayClick: (date: Date) => void;
  handleYearMonthSelect: (year: number, month: number) => void;
}

// 프로그레스바
export interface CalendarTabsProps {
  activeTab: "date" | "flexible";
  onTabChange: (tab: "date" | "flexible") => void;
  isStart?: boolean;
  isEnd?: boolean;
  isStartAndEnd?: boolean; 
}

// 일정 상단에 있는 ex) 2025년 1월
export interface MonthNavigationProps {
  currentYear: number;
  currentMonth: number;
}

// 연월 지정
export interface YearMonthPickerProps {
  currentYear: number;
  currentMonth: number;
  onSelectYear: (year: number) => void;
  onSelectMonth: (month: number) => void;
  onSelect?: (selectedYear: number, selectedMonth: number) => void;
  closePicker: () => void;
}

// 날짜 지정
export interface CalendarDaysProps {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onDayClick: (date: Date) => void;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onStateChange: (isStartAndEnd: boolean) => void; 
}

// 완료버튼
export interface CompleteButtonProps {
  startDate: Date | null;
  endDate: Date | null;
  mode: "date" | "flexible";
  onComplete: () => void;
}

