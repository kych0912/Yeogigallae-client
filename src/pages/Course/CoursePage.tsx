import SharedCoursePage from "./SharedCourse/SharedCoursePage";
import ShareCorsePage from "./ShareCourse/ShareCorsePage";
import CourseOverviewCardSkeleton from "./_components/CourseOverviewCardSkeleton";
import { useGetCourseInfo } from "../../react-query/queries/course/queries";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Page(){
  const {tripId,roomId} = useParams();
  const [searchParams] = useSearchParams();
  
  //courseInfo 조회
  const {data:courseInfo, isLoading:courseInfoLoading, isError:courseInfoError} = useGetCourseInfo(tripId ?? "1",roomId ?? "1");

  const isEnd = searchParams.get("isEnd") === "true";

  if(courseInfoLoading) return <CourseOverviewCardSkeleton/>;
  
  //에러가 발생하거나
  //courseInfo가 없거나
  //roomId가 없거나
  //tripId가 없거나
  if( 
    courseInfoError || 
    !courseInfo || 
    !roomId || 
    !tripId
  ) return <div style={{textAlign:"center",color:"white"}}>Error...</div>;

  if(!isEnd) return(
    <>
      <ShareCorsePage
        courseInfo={{...courseInfo, roomId:roomId, tripId:tripId}}
      />
    </>
  )

  //만약 시간이 지났다면 생성된 aiCourse를 조회
  return (
    <>
      <SharedCoursePage   
        title={"지구마블"}
        courseInfo={{...courseInfo, roomId:roomId, tripId:tripId}}
      />
    </>
  );
}
