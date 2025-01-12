import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import DetailPage from "../DetailPage";
import { UseQueryResult } from "@tanstack/react-query";
import Detail from "../ShareCourse/Detail";


export default function SharedCoursePage({allCoursesQueries}:
{allCoursesQueries:UseQueryResult<Route | null, Error>[]}){

  const {Funnel,Step,setStep} = useFunnel("코스개요");

    return (
    <>
      <Funnel>
        <Step name="코스개요">
          <Detail 
            dailyRoutes={allCoursesQueries[0].data}
            onNext={()=>setStep("코스목록")}
          />
        </Step>
        <Step name="코스보기">
          <DetailPage 
            allCoursesQueries={allCoursesQueries}
          />
        </Step>

      </Funnel>
    </>
    )
}