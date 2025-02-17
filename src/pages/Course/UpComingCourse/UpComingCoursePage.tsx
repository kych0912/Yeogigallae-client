import { useEffect } from "react";
import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";
import { FirstDayItinerary, FirstDayCourse } from "../../../apis/upcomingCourse/types";

export default function UpComingCoursePage() {
    const { tripPlanId, aiCourseId } = useParams<{ tripPlanId: string; aiCourseId: string }>();
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    // tripPlanId와 aiCourseId를 number로 변환하여 쿼리 훅에 전달
    const { data, isLoading, error } = useGetCourseInfo(Number(tripPlanId), Number(aiCourseId));

    // FirstDayCourse 타입을 courseData에 할당
    const firstDayCourseData: FirstDayCourse | null = data ?? null;

    // firstDayItinerary에 dailyItineraries 배열의 첫 번째 항목 할당 (있다면)
    const firstDayItinerary: FirstDayItinerary | null = firstDayCourseData?.dailyItineraries[0] ?? null;

    useEffect(() => {
        if (firstDayCourseData) {
            setHeaderConfig({
                title: firstDayCourseData.roomName,
                number: firstDayCourseData.totalRoomMember,
            });
        }
    }, [firstDayCourseData, setHeaderConfig]);

    useEffect(() => {
        console.log("tripPlanId:", tripPlanId);
        console.log("aiCourseId:", aiCourseId);
        console.log("isLoading:", isLoading);
        console.log("error:", error);
        console.log("firstDayCourseData:", firstDayCourseData);
    }, [tripPlanId, aiCourseId, isLoading, error, firstDayCourseData]);

    if (isLoading) {
        console.log("로딩중");
        return <div>로딩중...</div>;
    }

    if (error || !firstDayItinerary) {
        console.error("에러 발생");
        return <div>코스 정보를 불러오지 못했습니다.</div>;
    }

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={firstDayItinerary} />
            <RecommendCard />
        </UpComingContainer>
    );
}
