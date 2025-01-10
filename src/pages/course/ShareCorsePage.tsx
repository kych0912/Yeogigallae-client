import CourseShareCard from "../../components/Course/CourseShareCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Container, CompleteMessage } from "./Style";
import { Route } from "../../apis/map/types";


export default function ShareCorsePage({dayOnCourseQueries}:
    {dayOnCourseQueries:Route | undefined | null}){

    return (
    <Container>
      <CourseShareCard 
        dailyRoutes={dayOnCourseQueries}
      />

      <CompleteMessage>
        {"규림님이 코스짜기를 시작했습니다."}
        <br/>
        {"6시간 이후 종료됩니다."}
      </CompleteMessage>
    </Container>
    )
}
