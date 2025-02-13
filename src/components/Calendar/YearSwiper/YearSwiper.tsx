import { useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import * as S from "../YearMonthPicker.styles";

interface YearSwiperProps {
  years: number[];
  currentYear: number;
  initialYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSwiper({ years, currentYear, initialYear, onYearChange }: YearSwiperProps) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null); 

  return (
    <S.StyledSwiper
      slidesPerView={4.12}
      centeredSlides
      spaceBetween={10}
      resistanceRatio={0.85}
      speed={500}
      loop={false}
      initialSlide={years.indexOf(initialYear)}
      onSwiper={setSwiperInstance}
      onSlideChange={(swiper) => {
        const newYear = years[swiper.activeIndex];
        onYearChange(newYear);
      }}
      modules={[FreeMode, Navigation]}
    >
      {years.map((year, index) => (
        <S.StyledSwiperSlide
          key={year}
          onClick={() => {
            if (swiperInstance) {
              swiperInstance.slideTo(index, 500);
              onYearChange(year);
            }
          }}
        >
          <S.YearItem $selected={year === currentYear}>{year}</S.YearItem>
        </S.StyledSwiperSlide>
      ))}
    </S.StyledSwiper>
  );
}
