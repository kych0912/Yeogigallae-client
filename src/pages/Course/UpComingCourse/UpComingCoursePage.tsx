import { useEffect } from "react";
import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";

export default function UpComingCoursePage() {
    const { roomId, aiCourseId } = useParams<{ roomId: string; aiCourseId: string }>();
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    const { data, isLoading, error } = useGetCourseInfo(roomId!, aiCourseId!);

    const courseData = data ?? null;

    useEffect(() => {
        if (courseData) {
            setHeaderConfig({
                title: courseData.roomName,
                number: courseData.totalRoomMember,
            });
        }
    }, [courseData, setHeaderConfig]);

    if (isLoading) {
        console.log("로딩중");
    }

    if (error || !courseData) {
        console.error("에러 발생");
    }

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={courseData} />
            <RecommendCard />
        </UpComingContainer>
    );
}
