import { useEffect, useState } from "react";
import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";
import { getCarDirection } from "../../../../apis/map";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatFirstDayData = (data: any) => {
    if (data && data.dailyItineraries && data.dailyItineraries.length > 0) {
        const firstDay = data.dailyItineraries[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedPlaces = firstDay.places.map((place: any) => ({
            id: place.id,
            placeName: place.placeName,
            address: place.address,
            latitude: place.latitude,
            longitude: place.longitude,
        }));

        return {
            day: "2025-02-15", // 원하는 날짜로 설정 => 백엔드에 요청.........................................
            places: formattedPlaces,
        };
    }
    return null;
};

interface UpComingCourseCardProps {
    dailyRoutes: FirstDayItinerary;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    const [routeDetail, setRouteDetail] = useState<RouteDetail | null>(null);

    const formattedFirstDayData = formatFirstDayData(dailyRoutes);

    useEffect(() => {
        const fetchRouteDetail = async () => {
            if (!formattedFirstDayData || formattedFirstDayData.places.length === 0) return;

            const places = formattedFirstDayData.places;
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
            const waypoints = places.slice(1, places.length - 1).map((place: { placeName: string; latitude: number; longitude: number }) => ({
                name: place.placeName,
                lat: place.latitude,
                lng: place.longitude,
            }));

            const route = await getCarDirection(start, end, waypoints);
            setRouteDetail(route.routes[0]);
        };

        fetchRouteDetail();
    }, [formattedFirstDayData]);

    if (!formattedFirstDayData || formattedFirstDayData.places.length === 0) {
        return (
            <Card>
                <Card.Title>{"여행 코스가 존재하지 않습니다."}</Card.Title>
            </Card>
        );
    }

    return (
        <RecommendCard>
            <UpComingButton disabled={true} size="large" color="secondary">
                {`${formattedFirstDayData.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{routeDetail && <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${formattedFirstDayData.places.length}명 참여`} />
            </Card.Item>

            <Card.Item>{routeDetail && <CoursePlaces places={routeDetail} />}</Card.Item>
        </RecommendCard>
    );
}
