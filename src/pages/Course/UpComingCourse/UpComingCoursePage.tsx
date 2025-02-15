import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";

export default function UpComingCoursePage() {
    const { setHeaderConfig, roomId, aiCourseId } = useOutletContext<{
        setHeaderConfig: (config: HeaderConfig) => void;
        roomId: string;
        aiCourseId: string;
    }>();

    const { data, isLoading, error } = useGetCourseInfo(roomId, aiCourseId);
    const courseData = data?.result?.[0] ?? null;

    // 헤더 설정 (데이터가 있을 때만)
    if (courseData) {
        setHeaderConfig({ title: courseData.roomName, number: courseData.totalRoomMember });
    }

    if (isLoading) {
        return <UpComingContainer>Loading...</UpComingContainer>;
    }

    if (error || !courseData) {
        return <UpComingContainer>코스 정보를 불러오지 못했습니다.</UpComingContainer>;
    }

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={courseData} />
            <RecommendCard />
        </UpComingContainer>
    );
}
