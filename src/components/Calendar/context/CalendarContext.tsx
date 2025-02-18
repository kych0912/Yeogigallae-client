import { createContext, useContext, useState, ReactNode } from "react";

interface CalendarContextProps {
  currentDate: Date;
  startDate: Date | null;
  endDate: Date | null;
  mode: "date" | "flexible";
  setCurrentDate: (date: Date) => void;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setMode: (mode: "date" | "flexible") => void;
  resetCalendar: () => void;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(undefined);

const parseDate = (dateString: string | null): Date | null => {
  return dateString ? new Date(dateString) : null;
};

// ✅ 한국 시간(KST)으로 변환하는 함수
const formatToKST = (date: Date | null): string | null => {
  if (!date) return null;
  const offset = 9 * 60 * 60 * 1000; // UTC+9 (KST)
  const kstDate = new Date(date.getTime() + offset);
  return kstDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
};

export function CalendarProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDateState] = useState<Date | null>(parseDate(localStorage.getItem("calendarStartDate")));
  const [endDate, setEndDateState] = useState<Date | null>(parseDate(localStorage.getItem("calendarEndDate")));
  const [mode, setMode] = useState<"date" | "flexible">("date");

  // ✅ setState 내부에서 localStorage 즉시 업데이트
  const setStartDate = (date: Date | null) => {
    setStartDateState(date);
    if (date) {
      localStorage.setItem("calendarStartDate", formatToKST(date)!);
    } else {
      localStorage.removeItem("calendarStartDate");
    }
  };

  const setEndDate = (date: Date | null) => {
    setEndDateState(date);
    if (date) {
      localStorage.setItem("calendarEndDate", formatToKST(date)!);
    } else {
      localStorage.removeItem("calendarEndDate");
    }
  };

  const resetCalendar = () => {
    setCurrentDate(today);
    setStartDate(null);
    setEndDate(null);
    setMode("date");
    localStorage.removeItem("calendarStartDate");
    localStorage.removeItem("calendarEndDate");
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        startDate,
        endDate,
        mode,
        setCurrentDate,
        setStartDate,
        setEndDate,
        setMode,
        resetCalendar,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
}
