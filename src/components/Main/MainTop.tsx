import React from "react";
import * as S from "./Main.Styles";
import MyBtn from "../../assets/icons/Leave.svg";
import Alarm from "../../assets/icons/Leave.svg";
// 이거 아이콘 오류남.. 다시 다운

const MainTop: React.FC = () => {
    return (
        <S.TopContainer>
            <S.Title>
                00님, 오늘은 <br /> 어디 가실래요?
            </S.Title>
            <S.IconContainer>
                <S.Icon src={Alarm} alt="Alarm Icon"></S.Icon>
                <S.Icon src={MyBtn} alt="My Button Icon"></S.Icon>
            </S.IconContainer>
        </S.TopContainer>
    );
};

export default MainTop;
