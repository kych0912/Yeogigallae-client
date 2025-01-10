import React, { useState } from 'react';
import * as S from './FlexibleSelect.styles';

interface FlexibleSelectProps {
  startDate: Date | null;
  endDate: Date | null;
  handleDayClick: (date: Date) => void;
  onSelectPeriod: (period: number) => void;
  onSelectMonth: (month: Date) => void;
}

const FlexibleSelect: React.FC<FlexibleSelectProps> = ({
  startDate,
  endDate,
  onSelectPeriod,
  onSelectMonth,
}) => {
  const [activePeriod, setActivePeriod] = useState<number | null>(null);
  const [activeMonth, setActiveMonth] = useState<Date | null>(null);

  const handlePeriodClick = (period: number) => {
    setActivePeriod(period); 
    onSelectPeriod(period); 
  };

  const handleMonthClick = (month: Date) => {
    setActiveMonth(month); 
    onSelectMonth(month); 
  };

  const getNextMonths = () => {
    const currentMonth = new Date();
    const months = [];
    for (let i = 0; i < 3; i++) {
      months.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + i, 1));
    }
    return months;
  };

  const months = getNextMonths();

  if (startDate && endDate) {
    console.log(`FlexibleSelect - startDate and endDate are declared but not being used.`);
    console.log(`Start Date: ${startDate.toLocaleDateString()} End Date: ${endDate.toLocaleDateString()}`);
  } else {
    console.log(`FlexibleSelect - startDate and endDate are declared but not used in the component.`);
  }

  return (
    <S.FlexibleSelectWrapper>
      <S.SelectPeriodWrapper>
        <S.SelectPeriodText>원하는 기간을 선택하세요.</S.SelectPeriodText>
        <S.PeriodButton
          onClick={() => handlePeriodClick(3)}
          isActive={activePeriod === 3}
        >
          3박
        </S.PeriodButton>
        <S.PeriodButton
          onClick={() => handlePeriodClick(4)}
          isActive={activePeriod === 4}
        >
          4박
        </S.PeriodButton>
        <S.PeriodButton
          onClick={() => handlePeriodClick(5)}
          isActive={activePeriod === 5}
        >
          5박
        </S.PeriodButton>
      </S.SelectPeriodWrapper>

      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>

      <S.SelectMonthWrapper>
        <S.SelectMonthText>원하는 달을 선택하세요.</S.SelectMonthText>
        <S.MonthButtonContainer>
          <S.MonthButtonGroup>
            {months.map((month, index) => (
              <S.MonthButton
                key={index}
                onClick={() => handleMonthClick(month)}
                isActive={activeMonth?.getTime() === month.getTime()}
              >
                <S.MonthText isActive={activeMonth?.getTime() === month.getTime()}>
                  {`${month.getMonth() + 1}월`}
                </S.MonthText>
                <S.YearText isActive={activeMonth?.getTime() === month.getTime()}>
                  {month.getFullYear()}
                </S.YearText>
              </S.MonthButton>
            ))}
          </S.MonthButtonGroup>
        </S.MonthButtonContainer>
      </S.SelectMonthWrapper>
    </S.FlexibleSelectWrapper>
  );
};

export default FlexibleSelect;
