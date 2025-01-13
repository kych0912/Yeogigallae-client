import React from "react";
import * as S from "./Styles";
import Leave from "../../../assets/icons/Leave.svg";
import Button from "../../../components/Login/KakaoButton";

const LoginPage: React.FC = () => {
    return (
        <S.Container>
            <S.Title>
                간편 로그인으로
                <br />
                빠르게 여행 계획을 세워보세요!
            </S.Title>
            <S.Img src={Leave} alt="Leave Icon" />
            <Button />
        </S.Container>
    );
};

export default LoginPage;
