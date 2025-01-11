import { useGetAllCourses } from "../../react-query/queries/queries";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { sampleData } from "./test";
import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import OverviewPage from "./OverViewPage";
import ShareCorsePage from "./ShareCorsePage";

export default function Page(){
  const courseId = useParams().courseId;

  // 전체 일정 경로 조회
  const allCoursesQueries = useGetAllCourses(sampleData);

  const isLoading = allCoursesQueries.some(query => query.isLoading);
  const isError = allCoursesQueries.some(query => query.isError);
  const isEnd = false;

  if(isLoading) return <div style={{textAlign:"center",color:"white"}}>Loading...</div>;
  if(isError) return <div style={{textAlign:"center",color:"white"}}>Error...</div>;

  if(!isEnd) return(
    <>
      <ShareCorsePage 
        dayOnCourseQueries={allCoursesQueries[0].data}
      />
    </>
  )

  // courseId가 있으면 해당 코스의 상세 페이지를, 없으면 전체 개요 페이지를 렌더링
  if (courseId) {
    return (
      <>
        <DetailPage 
          allCoursesQueries={allCoursesQueries}
        />
      </>
    );
  }

  return (
    <>
      <OverviewPage   
        dayOnCourseQueries={allCoursesQueries[0].data}
      />
    </>
  );
}