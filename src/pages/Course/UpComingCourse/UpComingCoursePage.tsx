import { useEffect } from "react";
import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";

export default function UpComingCoursePage() {
    // URL 파라미터에서 roomId와 aiCourseId 가져오기
    const { roomId, aiCourseId } = useParams<{ roomId: string; aiCourseId: string }>();

    // useOutletContext를 통해 Layout에서 넘겨받은 setHeaderConfig 함수만 사용
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    // useGetCourseInfo를 사용하여 API 호출
    const { data, isLoading, error } = useGetCourseInfo(roomId!, aiCourseId!);

    // 데이터가 없다면 null로 설정
    const courseData = data ?? null;

    // useEffect로 컴포넌트 렌더링 후에 setHeaderConfig 업데이트
    useEffect(() => {
        if (courseData) {
            setHeaderConfig({
                title: courseData.roomName, // 코스 이름을 헤더 타이틀로 설정
                number: courseData.totalRoomMember, // 참여 인원 수를 헤더에 표시
            });
        }
    }, [courseData, setHeaderConfig]); // courseData가 변경될 때만 실행

    // 로딩 중이라면 로딩 표시
    if (isLoading) {
        return <UpComingContainer>Loading...</UpComingContainer>;
    }

    // 에러가 발생하거나 데이터가 없다면 오류 메시지 표시
    if (error || !courseData) {
        return <UpComingContainer>코스 정보를 불러오지 못했습니다.</UpComingContainer>;
    }

    // 코스 정보가 잘 로드되었다면 코스 카드와 추천 카드 렌더링
    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={courseData} /> {/* 첫 번째 일정만 넘겨줌 */}
            <RecommendCard /> {/* 추천 카드 */}
        </UpComingContainer>
    );
}
