import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleKakaoLogin } from "./authService"; // 비즈니스 로직 모듈화
import * as S from "./LoginPage/Styles";

export default function Kakao() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const code = searchParams.get("code");
        if (code) {
            handleKakaoLogin(code, navigate);
        } else {
            navigate("/login", { replace: true });
        }
    }, [searchParams, navigate]);

    return (
        <S.Container>
            <S.Title>로그인중...</S.Title>
        </S.Container>
    );
}
