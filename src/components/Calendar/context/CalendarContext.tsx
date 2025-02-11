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

export function CalendarProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [mode, setMode] = useState<"date" | "flexible">("date");

  const resetCalendar = () => {
    setCurrentDate(today);
    setStartDate(null);
    setEndDate(null);
    setMode("date");
  };

  return (
    <CalendarContext.Provider
      value={{ 
        currentDate, startDate, endDate, mode, 
        setCurrentDate, setStartDate, setEndDate, setMode,
        resetCalendar  
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
