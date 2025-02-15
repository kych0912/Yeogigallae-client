import { CourseDay } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";

interface UpComingCourseCardProps {
    dailyRoutes: CourseDay | null;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    if (!dailyRoutes) {
        return (
            <Card>
                <Card.Title>{"코스가 존재하지 않습니다."}</Card.Title>
            </Card>
        );
    }

    // ✅ `Map`이 기대하는 `RouteDetail`로 변환
    const routeDetail = {
        result_code: "SUCCESS",
        result_msg: "코스 데이터",
        summary: {
            origin: dailyRoutes.places[0], // 첫 번째 장소를 출발지로 설정
            waypoints: dailyRoutes.places.slice(1, -1), // 중간 경유지
            destination: dailyRoutes.places[dailyRoutes.places.length - 1], // 마지막 장소를 목적지로 설정
        },
        sections: [], // 필요하면 sections 데이터 추가
    };

    return (
        <RecommendCard>
            <UpComingButton disabled={true} size="large" color="secondary">
                {`${dailyRoutes.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>
                {/* ✅ `routeDetail`을 `Map`에 전달해서 타입 오류 해결 */}
                <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />
            </Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${dailyRoutes.totalRoomMember}명 참여`} />
            </Card.Item>

            <Card.Item>
                {/* ✅ `places`는 `CoursePlace[]`이므로 그대로 전달 */}
                <CoursePlaces places={dailyRoutes.places} />
            </Card.Item>
        </RecommendCard>
    );
}
