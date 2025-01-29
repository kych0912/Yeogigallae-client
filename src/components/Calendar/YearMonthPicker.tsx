import { useRef, useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";
import MonthNavigation from "./MonthNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Navigation } from "swiper/modules";
import { YearMonthPickerProps } from "./types/types";

export default function YearMonthPicker({
  currentYear,
  currentMonth,
  onSelectYear,
  onSelectMonth,
  onSelect,
  closePicker,
}: YearMonthPickerProps) {
  const [years] = useState<number[]>(() =>
    Array.from({ length: 41 }, (_, i) => currentYear - 20 + i)
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(currentMonth);
  const yearDialRef = useRef<HTMLDivElement>(null);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedMonth(null);
    onSelectYear(year);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    onSelectMonth(month);
    if (onSelect) onSelect(selectedYear, month);
    closePicker();
  };

  useEffect(() => {
    const handleScrollStop = () => {
      if (!yearDialRef.current) return;

      const { scrollLeft, clientWidth } = yearDialRef.current;
      const centerPosition = scrollLeft + clientWidth / 2;
      const closestIndex = Math.round(centerPosition / 70);
      const newSelectedYear = years[closestIndex];

      if (newSelectedYear !== selectedYear) {
        handleYearChange(newSelectedYear);
      }
    };

    const container = yearDialRef.current;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollStop, 300);
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [years, selectedYear]);

  return (
    <>
      <MonthNavigation currentYear={currentYear} currentMonth={currentMonth} />
      <S.Wrapper>
        <Swiper
          slidesPerView={4.12}
          centeredSlides
          spaceBetween={10}
          resistanceRatio={0.85}
          speed={500}
          style={{
            width: "100%",
          }}
          onSlideChange={(swiper) => {
            const newYear = 2025 + swiper.activeIndex;
            if (newYear > 2050) {
              swiper.slideTo(25);
            } else {
              setSelectedYear(newYear);
              onSelectYear(newYear);
            }
          }}
          modules={[FreeMode, Navigation]}
        >
          {Array.from({ length: 26 }, (_, i) => 2025 + i).map((year) => (
            <SwiperSlide key={year}>
              <S.YearItem $selected={year === selectedYear}>{year}</S.YearItem>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 월 선택 */}
        <S.MonthGrid>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <S.MonthItem
              key={month}
              $selected={month === selectedMonth}
              onClick={() => handleMonthChange(month)}
            >
              {month}월
            </S.MonthItem>
          ))}
        </S.MonthGrid>
      </S.Wrapper>
    </>
  );
}
