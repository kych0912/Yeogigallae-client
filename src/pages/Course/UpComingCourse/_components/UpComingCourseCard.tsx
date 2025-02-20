import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";
import { useGetAllCourses, Place } from "../../../../react-query/queries/queries";

interface UpComingCourseCardProps {
    firstDayItinerary: FirstDayItinerary;
}

export default function UpComingCourseCard({ firstDayItinerary }: UpComingCourseCardProps) {
    // 1일차의 장소들을 배열로 만듬
    const dailyPlaces: Place[][] = firstDayItinerary?.places.length
        ? firstDayItinerary.places.map((place) => [
              {
                  id: place.id,
                  name: place.placeName,
                  coordinates: { lat: place.latitude, lng: place.longitude },
              },
          ])
        : [[]];

    const queryResults = useGetAllCourses(dailyPlaces);

    const dailyRoutes: RouteDetail | null = queryResults[0]?.data?.routes?.[0] ?? null;
    const isLoading = queryResults[0]?.isLoading ?? false;
    const isError = queryResults[0]?.isError ?? false;

    // 디버깅 출력
    console.log("✅ dailyPlaces:", dailyPlaces); // dailyPlaces 배열 전체 확인
    console.log("✅ dailyPlaces[0]:", dailyPlaces[0]); // 첫 번째 dailyPlaces 확인
    console.log("✅ queryResults 전체:", queryResults); // queryResults 배열 전체 확인
    console.log("✅ queryResults[0]:", queryResults[0]); // 첫 번째 쿼리 결과 확인
    console.log("✅ queryResults[0]?.data:", queryResults[0]?.data); // 첫 번째 데이터 확인
    console.log("✅ queryResults[0]?.data?.routes:", queryResults[0]?.data?.routes); // 첫 번째 routes 확인
    console.log("✅ 쿼리 로딩 상태:", queryResults[0]?.isLoading);
    console.log("✅ 쿼리 에러 상태:", queryResults[0]?.isError);
    console.log("✅ 쿼리 에러 메시지:", queryResults[0]?.error);

    if (!firstDayItinerary || firstDayItinerary.places.length < 2) {
        return (
            <Card>
                <Card.Title>여행 코스가 존재하지 않습니다.</Card.Title>
            </Card>
        );
    }

    return (
        <RecommendCard>
            <UpComingButton disabled size="large" color="secondary">
                {`${firstDayItinerary.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{isLoading ? <div>지도 데이터를 불러오는 중...</div> : isError || !dailyRoutes ? <div>경로 정보를 불러올 수 없습니다.</div> : <Map width="100%" height="400px" dailyRoutes={dailyRoutes} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={"1박 일정"} />
            </Card.Item>

            <Card.Item>{isLoading ? <div>경로 정보를 불러오는 중...</div> : isError || !dailyRoutes ? <div>경로 정보를 불러올 수 없습니다.</div> : <CoursePlaces places={dailyRoutes} />}</Card.Item>
        </RecommendCard>
    );
}
