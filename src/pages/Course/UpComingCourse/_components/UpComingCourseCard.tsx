import { Route } from "../../../../apis/map/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";

export default function UpComingCourseCard({ dailyRoutes }: { dailyRoutes: Route | null | undefined }) {
    if (!dailyRoutes)
        return (
            <Card>
                <Card.Title>{"코스가 존재하지 않습니다."}</Card.Title>
            </Card>
        );

    return (
        <RecommendCard>
            <UpComingButton disabled={true} size="large" color="secondary">
                {"2024.02.12 코스 시작 예정"}
            </UpComingButton>

            <Card.Image>
                <Map width="100%" height="100%" dailyRoutes={dailyRoutes.routes[0]} level={3} />
            </Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content="2박 일정으로 추천드립니다." />
            </Card.Item>

            <Card.Item>
                <CoursePlaces places={dailyRoutes.routes[0]} />
            </Card.Item>
        </RecommendCard>
    );
}
