import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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

const formatDate = (date: Date | null): string | null => {
  return date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : null;
};

export function CalendarProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(
    localStorage.getItem("calendarStartDate") ? new Date(localStorage.getItem("calendarStartDate")!) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    localStorage.getItem("calendarEndDate") ? new Date(localStorage.getItem("calendarEndDate")!) : null
  );
  const [mode, setMode] = useState<"date" | "flexible">("date");

  useEffect(() => {
    const handleStorageChange = () => {
      const storedStartDate = localStorage.getItem("calendarStartDate");
      const storedEndDate = localStorage.getItem("calendarEndDate");

      if (formatDate(startDate) !== storedStartDate) {
        setStartDate(storedStartDate ? new Date(storedStartDate) : null);
      }
      if (formatDate(endDate) !== storedEndDate) {
        setEndDate(storedEndDate ? new Date(storedEndDate) : null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [startDate, endDate]);

  useEffect(() => {
    const storedStartDate = localStorage.getItem("calendarStartDate");
    const storedEndDate = localStorage.getItem("calendarEndDate");

    if (startDate && endDate) {
      if (storedStartDate !== formatDate(startDate) || storedEndDate !== formatDate(endDate)) {
        localStorage.setItem("calendarStartDate", formatDate(startDate)!);
        localStorage.setItem("calendarEndDate", formatDate(endDate)!);
        window.dispatchEvent(new Event("storage"));
      }
    }
  }, [startDate, endDate]);

  const resetCalendar = () => {
    setCurrentDate(today);
    setStartDate(null);
    setEndDate(null);
    setMode("date");
    localStorage.removeItem("calendarStartDate");
    localStorage.removeItem("calendarEndDate");
    window.dispatchEvent(new Event("storage"));
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
