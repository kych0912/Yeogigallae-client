import React, { useRef, useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";

interface YearMonthPickerProps {
  currentYear: number;
  onSelectYear: (year: number) => void;
}

const YearMonthPicker: React.FC<YearMonthPickerProps> = ({ currentYear, onSelectYear }) => {
  const [years] = useState<number[]>(() => {
    const initialYears = [];
    for (let i = -5; i <= 5; i++) {
      initialYears.push(currentYear + i);
    }
    return initialYears;
  });
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const yearDialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollStop = () => {
      if (!yearDialRef.current) return;

      const { scrollLeft, clientWidth } = yearDialRef.current;
      const centerPosition = scrollLeft + clientWidth / 2;
      const closestIndex = Math.round(centerPosition / 70);
      const newSelectedYear = years[closestIndex];

      if (newSelectedYear !== selectedYear) {
        setSelectedYear(newSelectedYear);
        onSelectYear(newSelectedYear);
      }
    };

    const container = yearDialRef.current;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollStop, 300); // 스크롤 멈춤 감지
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [years, selectedYear, onSelectYear]);

  return (
    <S.Wrapper>
      <S.YearDial ref={yearDialRef}>
        {years.map((year, index) => (
          <S.YearItem
            key={index}
            isSelected={year === selectedYear}
            onClick={() => {
              setSelectedYear(year);
              onSelectYear(year);
            }}
          >
            {year}
          </S.YearItem>
        ))}
      </S.YearDial>
    </S.Wrapper>
  );
};

export default YearMonthPicker;
