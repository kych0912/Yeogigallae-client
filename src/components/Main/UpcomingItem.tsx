//예정된 여행 카드
import React from "react";
import * as S from "./Main.Styles";
import Card from "./Card/Card";

const UpcomingItem: React.FC = () => {
    return (
        <S.RowTravelList>
            <S.UpcomingItem>
                <S.Image />
                <S.Box>
                    <S.TextBox>
                        <Card.Title>여행 제목</Card.Title>
                        <Card.Text>장소</Card.Text>
                    </S.TextBox>
                </S.Box>
            </S.UpcomingItem>
        </S.RowTravelList>
    );
};

export default UpcomingItem;
