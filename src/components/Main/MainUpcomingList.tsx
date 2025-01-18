// 홈 화면 : 예정된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Card from "./Card/Card";
import Upcoming from "../../assets/icons/Upcoming.svg";

const MainUpcomingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection
                leftContent={
                    <>
                        <img src={Upcoming} alt="Upcoming Icon" /> 예정된 여행
                    </>
                }
                rightContent={0}
            ></MainSection>
            <S.TravelList>
                <Card>
                    <S.Text>친구들을 추가하여 여행을 계획해보세요!</S.Text>
                </Card>
                <S.ListItem>
                    <Card.Title>여행 제목</Card.Title>
                    <Card.Text>장소</Card.Text>
                </S.ListItem>
            </S.TravelList>
        </S.Container>
    );
};

export default MainUpcomingList;
