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

    const courseData = data?.result?.[0];
    console.log("roomId:", roomId, "aiCourseId:", aiCourseId);
    console.log("Fetched data:", data);
    console.log(courseData);

    setHeaderConfig({ title: courseData.roomName, number: courseData.totalRoomMember });

    if (isLoading) {
        console.log("Loading full voting rooms...");
    }

    if (error || !courseData) {
        console.error("Error loading full voting rooms:", error);
    }

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={courseData} />
            <RecommendCard />
        </UpComingContainer>
    );
}
