import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";
import * as S from "./LoginPage/Styles";

type Provider = "kakao";

interface KakaoProps {
    provider: Provider;
}

const Kakao = ({ provider }: KakaoProps) => {
    const navigate = useNavigate();
    const processedRef = useRef(false);
    const setAccessToken = useAuthStore((state) => state.setAccessToken);

    const sendAuthCodeToServer = useCallback(
        async (code: string) => {
            try {
                // 가짜 서버 응답
                const response = {
                    data: {
                        accessToken: "mock_access_token_123", // 가짜 토큰
                    },
                };
                /* 실제 서버로 요청을 보내는 코드 : 이걸로 나중에 변경
                const response = await axios.post(
                    `/login/${provider}`,
                    { code },
                    {
                        withCredentials: true,
                    }
                );
*/
                if (response.data.accessToken) {
                    console.log("저장할 토큰:", response.data.accessToken);
                    setAccessToken(response.data.accessToken, provider);
                    navigate("/");
                }
            } catch (error) {
                console.error(`${provider} 로그인 실패:`, error);
                navigate("/login", { replace: true });
            }
        },
        [navigate, provider, setAccessToken]
    );

    useEffect(() => {
        if (processedRef.current) return;

        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");

        if (code) {
            sendAuthCodeToServer(code);
        } else {
            navigate("/", { replace: true });
        }

        processedRef.current = true;
    }, [navigate, sendAuthCodeToServer]);

    return (
        <S.Container>
            <S.Title>로그인중입니다...</S.Title>
        </S.Container>
    );
};

export default Kakao;
