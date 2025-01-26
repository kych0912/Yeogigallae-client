import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "./useAuthStore";
import { sendAuthCodeToServer } from "./api";
import * as S from "./LoginPage/Styles";

const Kakao = ({ provider }: { provider: string }) => {
    const navigate = useNavigate();
    const { setAccessToken } = useAuthStore();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const mutation = useMutation<{ accessToken: string }, Error, { code: string; provider: string }>(sendAuthCodeToServer, {
        onSuccess: (data: { accessToken: string }) => {
            if (data.accessToken) {
                setAccessToken(data.accessToken, provider);
                navigate("/");
            }
        },
        onError: () => {
            setErrorMessage("로그인에 실패했습니다. 다시 시도해주세요.");
            navigate("/login", { replace: true });
        },
    });

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (code) {
        mutation.mutate({ code, provider });
    } else {
        setErrorMessage("유효하지 않은 로그인 요청입니다.");
        navigate("/login", { replace: true });
    }

    return (
        <S.Container>
            {errorMessage && <S.Title>{errorMessage}</S.Title>}
            <S.Title>{mutation.isPending ? "로그인 중입니다..." : mutation.isError ? "로그인에 실패했습니다." : "로그인을 진행합니다."}</S.Title>
        </S.Container>
    );
};

export default Kakao;
