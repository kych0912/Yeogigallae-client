import { useRef, useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Navigation } from "swiper/modules";
import { useCalendar } from "./context/CalendarContext";
import { Toast } from "./CompleteButton.styles";

interface YearMonthPickerProps {
  onMonthSelect: (selected: boolean) => void;
}

export default function YearMonthPicker({ onMonthSelect }: YearMonthPickerProps) {
  const { currentDate, setCurrentDate } = useCalendar();
  const baseYear = 2025;
  const [years] = useState<number[]>(Array.from({ length: 41 }, (_, i) => baseYear + i));
  const [showToast, setShowToast] = useState(false);

  const now = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const yearDialRef = useRef<HTMLDivElement>(null);

  const handleYearChange = (year: number) => {
    setCurrentDate(new Date(year, currentMonth - 1, 1));
  };

  const handleMonthChange = (month: number) => {
    if (
      currentYear < now.getFullYear() || 
      (currentYear === now.getFullYear() && month < now.getMonth() + 1)
    ) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }
    setCurrentDate(new Date(currentYear, month - 1, 1));
    onMonthSelect(true);
  };

  useEffect(() => {
    if (currentYear < baseYear) {
      setCurrentDate(new Date(baseYear, currentMonth - 1, 1));
    }
  }, [currentYear, currentMonth, setCurrentDate]);

  useEffect(() => {
    const handleScrollStop = () => {
      if (!yearDialRef.current) return;
      const { scrollLeft, clientWidth } = yearDialRef.current;
      const centerPosition = scrollLeft + clientWidth / 2;
      const closestIndex = Math.round(centerPosition / 70);
      const newSelectedYear = years[closestIndex];
      if (newSelectedYear !== currentYear) {
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
  }, [years, currentYear]);

  return (
    <>
      <S.Wrapper>
        <Swiper
          slidesPerView={4.12}
          centeredSlides
          spaceBetween={10}
          resistanceRatio={0.85}
          speed={500}
          style={{ width: "100%" }}
          onSlideChange={(swiper) => {
            const newYear = years[swiper.activeIndex];
            handleYearChange(newYear);
          }}
          modules={[FreeMode, Navigation]}
        >
          {years.map((year) => (
            <SwiperSlide key={year}>
              <S.YearItem $selected={year === currentYear}>{year}</S.YearItem>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.MonthGrid>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <S.MonthItem
              key={month}
              $selected={month === currentMonth}
              $disabled={
                currentYear < now.getFullYear() ||
                (currentYear === now.getFullYear() && month < now.getMonth() + 1)
              }
              onClick={() => handleMonthChange(month)}
            >
              {month}월
            </S.MonthItem>
          ))}
        </S.MonthGrid>
      </S.Wrapper>
      <>
        {showToast && <Toast>이전 달은 선택할 수 없습니다!</Toast>}
      </>
    </>
  );
}
