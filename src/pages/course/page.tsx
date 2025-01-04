import { useGetAllCourses } from "../../react-query/queries/queries";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { sampleData } from "./test";
import { Container } from "./Style";
import { useSearchParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import OverviewPage from "./OverviewPage";

export default function Page(){
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  // 전체 일정 경로 조회
  const allCoursesQueries = useGetAllCourses(sampleData);

  const isLoading = allCoursesQueries.some(query => query.isLoading);
  const isError = allCoursesQueries.some(query => query.isError);

  if(isLoading) return <div style={{textAlign:"center",color:"white"}}>Loading...</div>;
  if(isError) return <div style={{textAlign:"center",color:"white"}}>Error...</div>;

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
    <Container>
      <OverviewPage   
        dayOnCourseQueries={allCoursesQueries[0].data}
      />
    </Container>
  );
}