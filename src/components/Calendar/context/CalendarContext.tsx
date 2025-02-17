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

export function CalendarProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(parseDate(localStorage.getItem("calendarStartDate")));
  const [endDate, setEndDate] = useState<Date | null>(parseDate(localStorage.getItem("calendarEndDate")));
  const [mode, setMode] = useState<"date" | "flexible">("date");

  const updateStartDate = (date: Date | null) => {
    setStartDate(date);
    date ? localStorage.setItem("calendarStartDate", date.toISOString()) : localStorage.removeItem("calendarStartDate");
  };

  const updateEndDate = (date: Date | null) => {
    setEndDate(date);
    date ? localStorage.setItem("calendarEndDate", date.toISOString()) : localStorage.removeItem("calendarEndDate");
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
        setStartDate: updateStartDate,
        setEndDate: updateEndDate,
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
