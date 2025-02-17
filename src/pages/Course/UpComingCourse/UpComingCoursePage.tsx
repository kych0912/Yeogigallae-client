import { useEffect } from "react";
import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";
import { CourseResponse, FirstDayItinerary } from "../../../apis/upcomingCourse/types";

export default function UpComingCoursePage() {
    const { tripPlanId, aiCourseId } = useParams<{ tripPlanId: string; aiCourseId: string }>();
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    const { data, isLoading, error } = useGetCourseInfo(tripPlanId ?? "1", aiCourseId ?? "1");

    const courseData: CourseResponse | null = data ?? null;
    const firstDayItinerary: FirstDayItinerary | null = courseData?.result.dailyItineraries[0] ?? null;

    useEffect(() => {
        if (courseData) {
            setHeaderConfig({
                title: courseData.result.roomName,
                number: courseData.result.totalRoomMember,
            });
        }
    }, [courseData, setHeaderConfig]);

    useEffect(() => {
        console.log("tripPlanId:", tripPlanId);
        console.log("aiCourseId:", aiCourseId);
        console.log("isLoading:", isLoading);
        console.log("error:", error);
        console.log("courseData:", courseData);
    }, [tripPlanId, aiCourseId, isLoading, error, courseData]);

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
