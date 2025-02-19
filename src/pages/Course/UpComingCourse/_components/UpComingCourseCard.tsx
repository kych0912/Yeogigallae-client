import { useState, useEffect } from "react";
import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";

interface Place {
    id: number;
    name: string;
    coordinates: { lat: number; lng: number };
}

const formatFirstDayData = (data: FirstDayItinerary | null): Place[][] | null => {
    if (!data || !data.places || data.places.length === 0) return null;

    const places: Place[] = data.places.map((place) => ({
        id: place.id,
        name: place.placeName,
        coordinates: { lat: place.latitude, lng: place.longitude },
    }));

    return [places];
};

interface UpComingCourseCardProps {
    dailyRoutes: FirstDayItinerary;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    const formattedFirstDayData = formatFirstDayData(dailyRoutes);
    const [routeDetail, setRouteDetail] = useState<RouteDetail | null>(null);

    useEffect(() => {
        if (formattedFirstDayData) {
            setRouteDetail(formattedFirstDayData);
        }
    }, [formattedFirstDayData]);

    console.log("✅ [UpComingCourseCard] formattedFirstDayData:", formattedFirstDayData);
    console.log("✅ [UpComingCourseCard] routeDetail:", routeDetail);

    if (!formattedFirstDayData) {
        return (
            <Card>
                <Card.Title>여행 코스가 존재하지 않습니다.</Card.Title>
            </Card>
        );
    }

    return (
        <RecommendCard>
            <UpComingButton disabled size="large" color="secondary">
                {`${dailyRoutes.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{routeDetail && <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${formattedFirstDayData[0].length}명 참여`} />
            </Card.Item>

            <Card.Item>{routeDetail ? <CoursePlaces places={routeDetail} /> : <div>경로 정보를 불러올 수 없습니다.</div>}</Card.Item>
        </RecommendCard>
    );
}
