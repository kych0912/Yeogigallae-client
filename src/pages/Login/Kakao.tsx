import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { sendAuthCodeToServer } from "./api";
import * as S from "./LoginPage/Styles";

const KakaoLogIn = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { setAccessToken } = useAuthStore();

    useEffect(() => {
        const code = searchParams.get("code");

        const handleLogin = async () => {
            if (!code) {
                navigate("/login", { replace: true });
                return;
            }

            const response = await sendAuthCodeToServer(code);

            if (response.accessToken) {
                setAccessToken(response.accessToken);
                navigate("/");
            } else {
                navigate("/login", { replace: true });
            }
        };

        handleLogin();
    }, [searchParams, navigate, setAccessToken]);

    return (
        <S.Container>
            <S.Title>로그인중...</S.Title>
        </S.Container>
    );
};

export default KakaoLogIn;
