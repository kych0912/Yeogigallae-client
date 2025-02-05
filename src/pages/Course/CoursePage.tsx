import { useGetAllCourses } from "../../react-query/queries/queries";
import { sampleData } from "./test";
import SharedCoursePage from "./SharedCourse/SharedCoursePage";
import ShareCorsePage from "./ShareCourse/ShareCorsePage";
import CourseOverviewCardSkeleton from "./_components/CourseOverviewCardSkeleton";

export default function Page(){

  // 전체 일정 경로 조회
  const allCoursesQueries = useGetAllCourses(sampleData);

  const isLoading = allCoursesQueries.some(query => query.isLoading);
  const isError = allCoursesQueries.some(query => query.isError);
  const isEnd = true;

  if(isLoading) return <CourseOverviewCardSkeleton/>;
  if(isError) return <div style={{textAlign:"center",color:"white"}}>Error...</div>;

  if(!isEnd) return(
    <>
      <ShareCorsePage 
        dayOnCourseQueries={allCoursesQueries[0].data}
        title={"지구마블"}
      />
    </>
  )

  return (
    <>
      <SharedCoursePage   
        allCoursesQueries={allCoursesQueries}
        title={"지구마블"}
      />
    </>
  );
}
