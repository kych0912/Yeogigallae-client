// 홈 화면 : 완료된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Button from "../Button/Button";

const MainTravelHistory: React.FC = () => {
    return (
        <S.HistoryContainer>
            <MainSection leftContent={"🙏 완료된 여행"} rightContent={0}></MainSection>
            <S.BtnBar>
                <Button color="secondary" variant="outline" size="large">
                    {"🌍 국내여행"}
                </Button>
                <Button color="secondary" variant="outline" size="large">
                    {"🌍 해외여행"}
                </Button>
            </S.BtnBar>
            <S.TravelList>
                <S.TravelListItem>새로운 여행 기록으로 채워보세요!</S.TravelListItem>
            </S.TravelList>
        </S.HistoryContainer>
    );
};

export default MainTravelHistory;
