import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { Route } from "../../../../apis/map/types";
import CourseDayButton from "../Detail/_components/CourseDayButton";
import CourseDetailCarouse from "../Detail/_components/CourseDetailCarousel";
import useSetHeader from "../../../../hooks/useSetHeader";

export default function DetailPage({
  allCoursesQueries
}: {
  allCoursesQueries: Route[]
}) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useSetHeader({
    title:"코스 확인중",
  });

  const handleSlideChange = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  //유효한 코스 Route만 추출
  const validDailyRoutes = allCoursesQueries?.filter((route)=>{
    return route.routes;
  });

    return (
    <>
      <CourseDayButton 
        allCoursesQueries={validDailyRoutes}
        handleSlideChange={handleSlideChange}
        activeIndex={activeIndex}
      />

      <CourseDetailCarouse
        allCoursesQueries={validDailyRoutes}
        setSwiperInstance={setSwiperInstance}
        setActiveIndex={setActiveIndex}
      />
    </>
    )
}