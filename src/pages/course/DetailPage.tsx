import { EffectCoverflow } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { ButtonWrapper, DetailCardWrapper, StyledSwiper } from "./Style";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import CourseDetailCard from "./_components/CourseDetailCard";
import { Route } from "../../apis/map/types";
import { UseQueryResult } from "@tanstack/react-query";

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
      <ButtonWrapper>
        {
          allCoursesQueries.map((query,index)=>(
            <Button 
              onClick={()=>handleSlideChange(index)} 
              style={{width:'100px',padding:'0.875rem 0',color:"white"}} 
              color={activeIndex === index ? "primary" : "secondary"} 
              size="small"
            >
              {`${index+1}일차`}
            </Button>
          ))
        }
      </ButtonWrapper>

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
    </>
    )
}