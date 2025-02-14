import SharedCoursePage from "./SharedCourse/SharedCoursePage";
import ShareCorsePage from "./ShareCourse/ShareCorsePage";
import CourseOverviewCardSkeleton from "./_components/CourseOverviewCardSkeleton";
import { useGetCourseInfo } from "../../react-query/queries/course/queries";
import { useParams } from "react-router-dom";

export default function Page(){
  const {tripId,roomId} = useParams();
  const {data:courseInfo, isLoading:courseInfoLoading, isError:courseInfoError} = useGetCourseInfo(tripId ?? "1",roomId ?? "1");

  const isEnd = false;

  if(courseInfoLoading) return <CourseOverviewCardSkeleton/>;
  if(courseInfoError || !courseInfo) return <div style={{textAlign:"center",color:"white"}}>Error...</div>;

  if(!isEnd) return(
    <>
      <ShareCorsePage
        courseInfo={{...courseInfo, roomId:roomId ?? "1", tripId:tripId ?? "1"}}
      />
    </>
  )

  return (
    <>
      <SharedCoursePage   
        title={"지구마블"}
      />
    </>
  );
}
