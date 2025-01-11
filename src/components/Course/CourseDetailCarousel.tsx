import { EffectCoverflow } from "swiper/modules";
import { StyledSwiper } from "./Course.style";
import { SwiperSlide } from "swiper/react";
import { DetailCardWrapper } from "./Course.style";
import CourseDetailCard from "./CourseDetailCard";
import { Route } from "../../apis/map/types";
import { UseQueryResult } from "@tanstack/react-query";
import { Swiper } from "swiper";

export default function CourseDetailCarousel({
    allCoursesQueries,
    setSwiperInstance,
    setActiveIndex
}:{
    allCoursesQueries:UseQueryResult<Route | null, Error>[],
    setSwiperInstance:(swiper:Swiper)=>void,
    setActiveIndex:(index:number)=>void
}){
    return(
        <StyledSwiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={-65}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >

          {
          allCoursesQueries.map((query,index)=>(
            <SwiperSlide style={{alignItems:'start',padding:'0'}} key={index}>
              <DetailCardWrapper>
                {query.data && (
                  <CourseDetailCard
                    dailyRoutes={query.data}
                  />
                )}
              </DetailCardWrapper>
            </SwiperSlide>
          ))
        }

      </StyledSwiper>
    )
}