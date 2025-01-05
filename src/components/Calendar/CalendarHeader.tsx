import React, { useState } from "react";
import * as S from "./CalendarHeader.styles";
import FlexibleSelect from "../FlexibleSelect/FlexibleSelect";
import CalendarDays from "./CalendarDays";
import { LeftArrow, RightArrow } from "../../assets/icons/Icons";

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  openYearMonthPicker: () => void;
  onModeChange: (mode: "date" | "flexible") => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDayClick: (date: Date) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentYear,
  currentMonth,
  setCurrentDate,
  openYearMonthPicker,
  onModeChange,
  startDate,
  endDate,
  handleDayClick
}) => {
  const [activeTab, setActiveTab] = useState<"date" | "flexible">("date");

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleTabClick = (tab: "date" | "flexible") => {
    setActiveTab(tab);
    onModeChange(tab);
  };

  // 기간 선택 함수
  const handleSelectPeriod = (period: number) => {
    console.log(`선택한 기간: ${period}박`);
  };

  // 달 선택 함수
  const handleSelectMonth = (month: Date) => {
    setCurrentDate(month);
  };

  return (
    <>
      <S.Header>
        <S.TabGroup>
          <S.TabButton
            isActive={activeTab === "date"}
            onClick={() => handleTabClick("date")}
          >
            날짜 지정
          </S.TabButton>
          <S.TabButton
            isActive={activeTab === "flexible"}
            onClick={() => handleTabClick("flexible")}
          >
            유연한 선택
          </S.TabButton>
        </S.TabGroup>
      </S.Header>

      {activeTab !== "flexible" && (
        <S.MonthHeader>
          {currentMonth !== 0 && (
            <S.NavButton onClick={handlePrevMonth}>{<LeftArrow />}</S.NavButton>
          )}
          <S.CurrentMonth onClick={openYearMonthPicker}>
            {`${currentYear}년 ${currentMonth + 1}월`}
          </S.CurrentMonth>
          <S.NavButton onClick={handleNextMonth}>{<RightArrow />}</S.NavButton>
        </S.MonthHeader>
      )}

      {activeTab === "flexible" ? (
        <FlexibleSelect
          startDate={startDate}
          endDate={endDate}
          handleDayClick={handleDayClick}
          onSelectPeriod={handleSelectPeriod}  // 기간 선택 함수 전달
          onSelectMonth={handleSelectMonth}    // 달 선택 함수 전달
        />
      ) : (
        <CalendarDays
          year={currentYear}
          month={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onDayClick={handleDayClick}
          setCurrentDate={setCurrentDate}
        />
      )}
    </>
  );
};

export default CalendarHeader;
