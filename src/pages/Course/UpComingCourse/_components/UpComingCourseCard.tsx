import { FirstDayCourse, CoursePlace } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";

interface UpComingCourseCardProps {
    dailyRoutes: FirstDayCourse | null;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    if (!dailyRoutes) {
        return (
            <Card>
                <Card.Title>{"코스가 존재하지 않습니다."}</Card.Title>
            </Card>
        );
    }

    // 🔹 CoursePlace[] → RouteDetail 변환 함수
    const convertToRouteDetail = (places: CoursePlace[]): RouteDetail => {
        if (places.length === 0) {
            return {
                result_code: 0,
                result_msg: "No places available",
                summary: {
                    origin: { name: "", x: 0, y: 0 },
                    destination: { name: "", x: 0, y: 0 },
                    waypoints: [],
                    priority: "default",
                    bound: { min_x: 0, min_y: 0, max_x: 0, max_y: 0 },
                    fare: { taxi: 0, toll: 0 },
                    distance: 0,
                    duration: 0,
                },
                sections: [],
            };
        }

        return {
            result_code: 200,
            result_msg: "Success",
            summary: {
                origin: {
                    name: places[0].placeName,
                    x: places[0].longitude,
                    y: places[0].latitude,
                },
                destination: {
                    name: places[places.length - 1].placeName,
                    x: places[places.length - 1].longitude,
                    y: places[places.length - 1].latitude,
                },
                waypoints: places.slice(1, -1).map((place) => ({
                    name: place.placeName,
                    x: place.longitude,
                    y: place.latitude,
                })),
                priority: "default",
                bound: { min_x: 0, min_y: 0, max_x: 0, max_y: 0 },
                fare: { taxi: 0, toll: 0 },
                distance: 0,
                duration: 0,
            },
            sections: [], // 필요한 경우 섹션 데이터를 추가 가능
        };
    };

    const routeDetail = convertToRouteDetail(dailyRoutes.places);

    return (
        <RecommendCard>
            <UpComingButton disabled={true} size="large" color="secondary">
                {`${dailyRoutes.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>
                <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />
            </Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${dailyRoutes.totalRoomMember}명 참여`} />
            </Card.Item>

            <Card.Item>
                <CoursePlaces places={routeDetail} />
            </Card.Item>
        </RecommendCard>
    );
}
