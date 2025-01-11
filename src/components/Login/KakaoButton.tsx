import React from "react";
import * as S from "./Styles";
import Kakao from "../../assets/icons/kakaoLogo.svg";
import Button from "../Button/Button";

const KakaoButton: React.FC = () => {
    const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const K_REDIRECT_URI = import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <S.Container>
            <Button onClick={handleKakaoLogin} style={{ width: "24rem", padding: "0.875rem 0", color: "#371d1e" }} color="Kakao" size="large" variant="contained">
                <S.Logo src={Kakao} alt="Kakao Logo" />
                카카오로 시작하기
            </Button>
            <S.Text onClick={handleKakaoLogin}>기존 회원 로그인하기</S.Text>
        </S.Container>
    );
};

export default KakaoButton;
