import 'swiper/swiper-bundle.css';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import Detail from "./Detail";
import { UseQueryResult } from "@tanstack/react-query";
import Overview from "./Overview";
import { useGetAllCourses } from "../../../react-query/queries/queries";
import { sampleData } from "../test";
import CourseOverviewCardSkeleton from "../_components/CourseOverviewCardSkeleton";

type TSharedCourseContext = {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스개요:{},
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스목록:{},
}

export default function SharedCoursePage({title}:
{title:string}){
  // 전체 일정 경로 조회
  const allCoursesQueries = useGetAllCourses(sampleData);

  const isLoading = allCoursesQueries.some((query) => query.isLoading);
  const isError = allCoursesQueries.some((query) => query.isError);

  const [ Funnel, setStep ] = useFunnel<TSharedCourseContext>({
    steps:["코스개요","코스목록"],
    init:{
      step:"코스개요",

      context:{},
    },
    stepQueryKey:"step",
  });

  if(isLoading) return <CourseOverviewCardSkeleton/>;
  if(isError) return <div>Error...</div>;

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