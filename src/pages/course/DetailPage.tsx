import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { Route } from "../../apis/map/types";
import { UseQueryResult } from "@tanstack/react-query";
import CourseDayButton from "../../components/Course/CourseDayButton";
import CourseDetailCarousel from "../../components/Course/CourseDetailCarousel";

export default function DetailPage({
  allCoursesQueries
}: {
  allCoursesQueries: UseQueryResult<Route | null, Error>[] | undefined | null
}) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if(!allCoursesQueries) return <div>Loading...</div>;

  const handleSlideChange = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

    return (
    <>
      <CourseDayButton 
        allCoursesQueries={allCoursesQueries}
        handleSlideChange={handleSlideChange}
        activeIndex={activeIndex}
      />

      <CourseDetailCarousel 
        allCoursesQueries={allCoursesQueries}
        setSwiperInstance={setSwiperInstance}
        setActiveIndex={setActiveIndex}
      />
    </>
    )
}