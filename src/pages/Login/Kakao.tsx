import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";
import * as S from "./LoginPage/Styles";

type Provider = "kakao";

interface KakaoProps {
    provider: Provider;
}

const sendAuthCodeToServer = async (data: { code: string; provider: Provider }) => {
    const response = await axios.post(`/login/${data.provider}`, { code: data.code }, { withCredentials: true });
    return response.data;
};

const Kakao = ({ provider }: KakaoProps) => {
    const navigate = useNavigate();
    const { setAccessToken } = useAuthStore();

    const mutation = useMutation({
        mutationFn: sendAuthCodeToServer,
        onSuccess: (data) => {
            if (data.accessToken) {
                setAccessToken(data.accessToken, provider);
                navigate("/");
            }
        },
        onError: (error) => {
            console.error(`${provider} 로그인 실패:`, error);
            navigate("/login", { replace: true });
        },
    });

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (code && !mutation.isLoading && !mutation.isSuccess) {
        mutation.mutate({ code, provider });
    } else if (!code) {
        navigate("/", { replace: true });
    }

    return (
        <S.Container>
            <S.Title>{mutation.isLoading ? "로그인 중입니다..." : mutation.isError ? "로그인에 실패했습니다." : "로그인을 진행합니다."}</S.Title>
        </S.Container>
    );
};

export default Kakao;
