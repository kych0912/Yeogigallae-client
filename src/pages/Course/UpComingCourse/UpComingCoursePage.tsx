import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { useEffect } from "react";
import { useGetAiKaKaoCourseAndId } from "../../../react-query/queries/course/queries";

export default function UpComingCoursePage() {
    const { tripPlanId } = useParams<{ tripPlanId: string; aiCourseId: string }>();
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    const { data, isLoading, error } = useGetAiKaKaoCourseAndId(tripPlanId);
    const CoursePlacesData = data?.aiKaKaoCourse;
    const firstDayCourseData = data?.aiCourse.result;

    useEffect(() => {
        if (firstDayCourseData) {
            setHeaderConfig({
                title: firstDayCourseData.roomName,
                number: firstDayCourseData.totalRoomMember,
            });
        }
    }, [firstDayCourseData, setHeaderConfig]);

    if (isLoading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>코스 정보를 불러오지 못했습니다.</div>;
    }

    if (!CoursePlacesData) {
        return (
            <Card>
                <Card.Title>여행 코스가 존재하지 않습니다.</Card.Title>
            </Card>
        );
    }

    return (
        <UpComingContainer>
            {<UpComingCourseCard firstDayItinerary={CoursePlacesData} startDate={firstDayCourseData?.startDate} />}

            <RecommendCard />
        </UpComingContainer>
    );
}
