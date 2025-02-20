import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";
import { useGetAllCourses, Place } from "../../../../react-query/queries/queries";

interface UpComingCourseCardProps {
    firstDayItinerary: FirstDayItinerary[];
    startDate: string;
}

export default function UpComingCourseCard({ firstDayItinerary }: UpComingCourseCardProps) {
    // 1일차의 장소들을 배열로 만듬
    const dailyPlaces: Place[][] = firstDayItinerary.map((day) =>
        day.places.map((place) => ({
            id: place.id,
            name: place.placeName,
            coordinates: {
                lat: place.latitude,
                lng: place.longitude,
            },
        }))
    );

    const queryResults = useGetAllCourses(dailyPlaces!);

    const dailyRoutes: RouteDetail | null = queryResults[0]?.data?.routes?.[0] ?? null;
    const isLoading = queryResults[0]?.isLoading ?? false;
    const isError = queryResults[0]?.isError ?? false;

    return (
        <RecommendCard>
            <UpComingButton disabled size="large" color="secondary">
                {`${firstDayItinerary[0].day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{isLoading ? <div>지도 데이터를 불러오는 중...</div> : isError || !dailyRoutes ? <div>경로 정보를 불러올 수 없습니다.</div> : <Map width="100%" height="250px" dailyRoutes={dailyRoutes} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${firstDayItinerary.length}박 일정`} />
            </Card.Item>

            <Card.Item>{isLoading ? <div>경로 정보를 불러오는 중...</div> : isError || !dailyRoutes ? <div>경로 정보를 불러올 수 없습니다.</div> : <CoursePlaces places={dailyRoutes} />}</Card.Item>
        </RecommendCard>
    );
}
