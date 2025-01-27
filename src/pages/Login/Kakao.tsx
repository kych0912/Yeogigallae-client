import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { sendAuthCodeToServer } from "./api";
import * as S from "./LoginPage/Styles";

const KakaoLogIn = ({ provider }: { provider: string }) => {
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

            const response = await sendAuthCodeToServer({ code, provider });

            if (response.accessToken) {
                setAccessToken(response.accessToken, provider);
                navigate("/");
            } else {
                navigate("/login", { replace: true });
            }
        };

        handleLogin();
    }, [searchParams, provider, navigate, setAccessToken]);

    // 로딩 화면을 무조건 띄움
    return (
        <S.Container>
            <S.Title>로그인중...</S.Title>
        </S.Container>
    );
};

export default KakaoLogIn;

/*export default function KakaoLogIn() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    (async () => {
      if (code) {
        await kakaoLogIn(code);
      }
    })();
  }, [code]);

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-16">
      <LoadingDots />
      <h3 className="text-lg font-semibold">로그인 진행 중</h3>
    </main>
  );
}*/
