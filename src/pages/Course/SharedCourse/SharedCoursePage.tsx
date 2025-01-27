import 'swiper/swiper-bundle.css';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import Detail from "./Detail";
import { UseQueryResult } from "@tanstack/react-query";
import Overview from "./Overview";

export default function SharedCoursePage({allCoursesQueries}:
{allCoursesQueries:UseQueryResult<Route | null, Error>[]}){

  const {Funnel,Step,setStep} = useFunnel("코스개요");

    return (
    <>
      <Funnel>
        <Step name="코스개요">
          <Overview 
            dailyRoutes={allCoursesQueries[0].data}
            onNext={()=>setStep("코스목록")}
          />
        </Step>
        <Step name="코스목록">
          <Detail 
            allCoursesQueries={allCoursesQueries}
          />
        </Step>

      </Funnel>
    </>
    )
}