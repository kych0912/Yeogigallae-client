import 'swiper/swiper-bundle.css';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import Detail from "./Detail";
import { UseQueryResult } from "@tanstack/react-query";
import Overview from "./Overview";

type TSharedCourseContext = {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스개요:{},
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스목록:{},
}

export default function SharedCoursePage({allCoursesQueries,title}:
{allCoursesQueries:UseQueryResult<Route | null, Error>[],title:string}){

  const [ Funnel, setStep ] = useFunnel<TSharedCourseContext>({
    steps:["코스개요","코스목록"],
    init:{
      step:"코스개요",

      context:{},
    },
    stepQueryKey:"step",
  });

    return (
    <>
      <Funnel>
        <Funnel.Step name="코스개요">
          <Overview 
            dailyRoutes={allCoursesQueries[0].data}
            onNext={()=>setStep<"코스개요">("코스목록",{})}  
            title={title}
          />
        </Funnel.Step>
        <Funnel.Step name="코스목록">
          <Detail 
            allCoursesQueries={allCoursesQueries as UseQueryResult<Route, Error>[]}
          />
        </Funnel.Step>
      </Funnel>
    </>
    )
}