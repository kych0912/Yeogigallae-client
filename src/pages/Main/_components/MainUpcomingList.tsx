import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../../assets/icons/Upcoming.svg";
import { useGetUpcoming } from "../../../react-query/queries/main/Upcoming/queries";
import Empty from "./UpcomingItem/Empty";
import { UpcomingCardSkeleton } from "./CardSkeleton";

export default function MainUpcomingList() {
    const { data, isLoading, error } = useGetUpcoming();

    // rooms 배열을 추출
    const upcomingRooms = data?.rooms || [];

    // 로딩 상태에서 콘솔 로그
    if (isLoading) {
        console.log("Loading upcoming rooms...");
    }

    // 에러 상태에서 콘솔 로그
    if (error) {
        console.error("Error loading upcoming rooms:", error); // 에러 로그 출력
    }

    return (
        <S.Container style={{ cursor: "pointer" }}>
            <MainSection
                leftContent={
                    <>
                        <img src={Upcoming} alt="Upcoming Icon" /> 예정된 여행
                    </>
                }
                rightContent={upcomingRooms.length}
            ></MainSection>
            {/* 카드 부분 */}
            {isLoading ? <UpcomingCardSkeleton /> : upcomingRooms.length > 0 ? <UpcomingItem rooms={upcomingRooms} /> : <Empty />}
        </S.Container>
    );
}
