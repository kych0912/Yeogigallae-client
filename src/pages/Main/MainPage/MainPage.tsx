// 홈 화면
import React from "react";
import * as S from "./Styles";
import MainTop from "../../../components/Main/MainTop";
import MainVotingList from "../../../components/Main/MainVotingList";
import MainUpcomingList from "../../../components/Main/MainUpcomingList";
import MainTravelHistory from "../../../components/Main/MainTravelHistory";
import FloatingButton from "../../../components/Main/FloatingButton/FloatingButton";

const MainPage: React.FC = () => {
    return (
        <S.Container>
            <MainTop></MainTop>
            <MainVotingList></MainVotingList>
            <MainUpcomingList></MainUpcomingList>
            <MainTravelHistory></MainTravelHistory>
            <FloatingButton></FloatingButton>
        </S.Container>
    );
};

export default MainPage;
