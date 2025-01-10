import React from "react";
import * as S from "./Styles";
import Kakao from "../../assets/icons/kakaoLogo.svg";

const Button: React.FC = () => {
    const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const K_REDIRECT_URI = import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <S.Container>
            <S.Button onClick={handleKakaoLogin}>
                <S.Logo src={Kakao} alt="Kakao Logo" />
                카카오로 시작하기
            </S.Button>
            <S.Text onClick={handleKakaoLogin}>기존 회원 로그인하기</S.Text>
        </S.Container>
    );
};

export default Button;
