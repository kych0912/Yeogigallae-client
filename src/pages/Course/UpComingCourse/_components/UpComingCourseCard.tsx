import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { Route } from "../../../../apis/map/types";

interface UpComingCourseCardProps {
    firstDayItinerary: Route[];
    startDate?: string;
}

export default function UpComingCourseCard({ firstDayItinerary, startDate }: UpComingCourseCardProps) {
    const validDailyRoutes = firstDayItinerary?.filter((place) => {
        return place.routes;
    });

    return (
        <RecommendCard>
            <UpComingButton disabled size="large" color="secondary">
                {`${startDate} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>
                <Map width="100%" height="250px" dailyRoutes={validDailyRoutes[0].routes[0]} level={3} />
            </Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${firstDayItinerary.length}박 일정`} />
            </Card.Item>

            <Card.Item>
                <CoursePlaces places={validDailyRoutes[0].routes[0]} />
            </Card.Item>
        </RecommendCard>
    );
}
