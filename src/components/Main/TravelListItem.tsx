//완료된 여행 카드 아이템
import React from "react";
import * as S from "./Main.Styles";

const MainTravelHistory: React.FC = () => {
    return (
        <S.TravelList>
            <S.TravelListItem>
                <S.Text>새로운 여행 기록으로 채워보세요!</S.Text>
            </S.TravelListItem>

            <S.TravelListItem>
                <S.Text>새로운 여행 기록으로 채워보세요!</S.Text>
            </S.TravelListItem>
        </S.TravelList>
    );
};

export default MainTravelHistory;
