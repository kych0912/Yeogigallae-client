// 홈 화면 : 예정된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";

const MainUpcomingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection leftContent={"🙏 예정된 여행"} rightContent={0}></MainSection>
            <S.TravelList>
                <S.ListItem>친구들을 추가하여 여행을 계획해보세요!</S.ListItem>
            </S.TravelList>
        </S.Container>
    );
};

export default MainUpcomingList;
