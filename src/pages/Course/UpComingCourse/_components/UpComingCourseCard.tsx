import { useEffect, useState } from "react";
import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";
import { getCarDirection } from "../../../../apis/map";

interface UpComingCourseCardProps {
    dailyRoutes: FirstDayItinerary;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    const [routeDetail, setRouteDetail] = useState<RouteDetail | null>(null);

    useEffect(() => {
        const fetchRouteDetail = async () => {
            if (dailyRoutes.places.length === 0) return;

            const places = dailyRoutes.places;
            const start = {
                name: places[0].placeName,
                lat: places[0].latitude,
                lng: places[0].longitude,
            };
            const end = {
                name: places[places.length - 1].placeName,
                lat: places[places.length - 1].latitude,
                lng: places[places.length - 1].longitude,
            };
            const waypoints = places.slice(1, places.length - 1).map((place) => ({
                name: place.placeName,
                lat: place.latitude,
                lng: place.longitude,
            }));

            console.log("Start:", start);
            console.log("End:", end);
            console.log("Waypoints:", waypoints);

            const route = await getCarDirection(start, end, waypoints);
            console.log("Route Detail:", route);
            setRouteDetail(route.routes[0]);
        };

        console.log("Daily Routes:", dailyRoutes);
        fetchRouteDetail();
    }, [dailyRoutes]);

    if (!dailyRoutes) {
        return (
            <Card>
                <Card.Title>{"코스가 존재하지 않습니다."}</Card.Title>
            </Card>
        );
    }

    return (
        <RecommendCard>
            <UpComingButton disabled={true} size="large" color="secondary">
                {`${dailyRoutes.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{routeDetail && <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${dailyRoutes.places.length}명 참여`} />
            </Card.Item>

            <Card.Item>{routeDetail && <CoursePlaces places={routeDetail} />}</Card.Item>
        </RecommendCard>
    );
}
