import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../../assets/icons/Upcoming.svg";
import { useGetUpcoming } from "../../../react-query/queries/main/Upcoming/queries";
import Empty from "./UpcomingItem/Empty";

export default function MainUpcomingList() {
    const { data: upcomingRooms = [], isLoading, error } = useGetUpcoming();

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

            {/* 로딩 상태 처리 =>스켈레톤 ui 적용 예정*/}
            {isLoading && <p>Loading...</p>}

            {error && <p>Error loading upcoming rooms</p>}

            {/* 카드 부분 */}
            {upcomingRooms.length > 0 ? <UpcomingItem rooms={upcomingRooms} /> : <Empty />}
        </S.Container>
    );
}
