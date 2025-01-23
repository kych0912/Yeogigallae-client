// 홈 화면
import * as S from "./Styles";
import MainTop from "../_components/MainTop";
import MainVotingList from "../_components/MainVotingList";
import MainUpcomingList from "../_components/MainUpcomingList";
import MainTravelHistory from "../_components/MainTravelHistory";
import FloatingButton from "../_components/FloatingButton/FloatingButton";

export default function MainPage() {
    return (
        <S.Container>
            <MainTop></MainTop>
            <MainVotingList></MainVotingList>
            <MainUpcomingList></MainUpcomingList>
            <MainTravelHistory></MainTravelHistory>
            <FloatingButton></FloatingButton>
        </S.Container>
    );
}
