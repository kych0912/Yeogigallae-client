import { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { Route } from "../../../../apis/map/types";
import { UseQueryResult } from "@tanstack/react-query";
import CourseDayButton from "../Detail/_components/CourseDayButton";
import CourseDetailCarouse from "../Detail/_components/CourseDetailCarousel";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";

export default function DetailPage({
  allCoursesQueries
}: {
  allCoursesQueries: UseQueryResult<Route, Error>[]
}) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

  useEffect(()=>{
    setHeaderConfig({title:"코스 확인중"});
  },[]);

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

      <CourseDetailCarouse
        allCoursesQueries={allCoursesQueries}
        setSwiperInstance={setSwiperInstance}
        setActiveIndex={setActiveIndex}
      />
    </>
    )
}