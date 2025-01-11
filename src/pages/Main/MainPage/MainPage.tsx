// 홈 화면
import React from "react";
import * as S from "./Styles";
import MainTop from "../../../components/Main/MainTop";
import MainVotingList from "../../../components/Main/MainVotingList";
import MainUpcomingList from "../../../components/Main/MainUpcomingList";
import MainTravelHistory from "../../../components/Main/MainTravelHistory";

const MainPage: React.FC = () => {
    return (
        <S.Container>
            <S.Title>Main Page!</S.Title>
            <MainTop></MainTop>
            <MainVotingList></MainVotingList>
            <MainUpcomingList></MainUpcomingList>
            <MainTravelHistory></MainTravelHistory>
        </S.Container>
    );
};

export default MainPage;
