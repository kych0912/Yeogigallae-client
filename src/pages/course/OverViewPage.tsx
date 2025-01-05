import CourseOverviewCard from "./_components/CourseOverviewCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Container } from "./Style";
import { Route } from "../../apis/map/types";
import styled from "styled-components";

export default function OverviewPage({dayOnCourseQueries}:
    {dayOnCourseQueries:Route | undefined | null}){

    return (
    <Container>
      <CourseOverviewCard 
        dailyRoutes={dayOnCourseQueries}
      />

      <CompleteMessage>
        {"AI 코스 생성이 완료되었습니다."}
        <br/>
        {"6시간 안에 코스에 대한 의견을 결정해주세요."}
      </CompleteMessage>
    </Container>
    )
}

const CompleteMessage = styled.div`
    color:#434343;
    text-align:center;
    font-size:0.875rem;
    font-weight:bold;
    line-height:1.125rem;
    margin-top:0.75rem;
`
