import { useRef, useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";
import MonthNavigation from "./MonthNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Navigation } from "swiper/modules";

interface YearMonthPickerProps {
  onMonthSelect: (selected: boolean) => void;
}

export default function YearMonthPicker({ onMonthSelect }: YearMonthPickerProps) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [years] = useState<number[]>(() => Array.from({ length: 41 }, (_, i) => currentYear + i));
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const yearDialRef = useRef<HTMLDivElement>(null);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedMonth(null);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    onMonthSelect(true); 
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

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [years, selectedYear]);

  return (
    <>
      <MonthNavigation currentYear={selectedYear} currentMonth={selectedMonth || currentMonth} />
      <S.Wrapper>
        <Swiper
          slidesPerView={4.12}
          centeredSlides
          spaceBetween={10}
          resistanceRatio={0.85}
          speed={500}
          style={{ width: "100%" }}
          onSlideChange={(swiper) => {
            const newYear = years[swiper.activeIndex]; // ✅ Swiper에서 선택한 연도를 반영
            setSelectedYear(newYear);
          }}
          modules={[FreeMode, Navigation]}
        >
          {years.map((year) => (
            <SwiperSlide key={year}>
              <S.YearItem $selected={year === selectedYear}>{year}</S.YearItem>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.MonthGrid>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <S.MonthItem key={month} $selected={month === selectedMonth} onClick={() => handleMonthChange(month)}>
              {month}월
            </S.MonthItem>
          ))}
        </S.MonthGrid>
      </S.Wrapper>
    </>
  );
}
