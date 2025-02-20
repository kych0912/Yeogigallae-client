import 'swiper/swiper-bundle.css';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import Detail from "./Detail";
import Overview from "./Overview";
import CourseOverviewCardSkeleton from "../_components/CourseOverviewCardSkeleton";
import { ICourseInfo } from '../../../apis/course/types';
import { useGetAiKaKaoCourseAndId } from '../../../react-query/queries/course/queries';

export type TTripInfo = ICourseInfo & {
  roomId: string;
  tripId: string;
}

type TSharedCourseContext = {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스개요:{},
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  코스목록:{},
}

export default function SharedCoursePage({courseInfo}:{courseInfo:TTripInfo}){
  const { tripId } = courseInfo;

  //aiCourseAndId 조회
  //courseId와 KaKao Route로 변환된 데이터 반환
  const { data: aiCourseAndId, isLoading: aiCourseAndIdLoading, isError: aiCourseAndIdError } = useGetAiKaKaoCourseAndId(tripId ?? "");
  
  // 전체 일정 경로 조회
  const allCoursesQueries = aiCourseAndId?.aiKaKaoCourse;

  const isLoading = aiCourseAndIdLoading;
  const isError = aiCourseAndIdError;

  
  const [ Funnel, setStep ] = useFunnel<TSharedCourseContext>({
    steps:["코스개요","코스목록"],
    init:{
      step:"코스개요",
      context:{},
    },
    stepQueryKey:"step",
  });

  if(isLoading) return <CourseOverviewCardSkeleton/>;
  if(isError) return <div style={{color:"white"}}>Error...</div>;


  return (
  <>
    <Funnel>
      <Funnel.Step name="코스개요">
        <Overview 
          courseInfo={courseInfo}
          dailyRoutes={allCoursesQueries}
          onNext={()=>setStep<"코스개요">("코스목록",{})}  
        />
      </Funnel.Step>
      <Funnel.Step name="코스목록">
        <Detail 
          allCoursesQueries={allCoursesQueries as Route[]}
        />
      </Funnel.Step>
    </Funnel>
  </>
  )
}