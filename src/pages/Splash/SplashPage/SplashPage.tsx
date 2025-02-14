import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../assets/icons/Logo.svg";

export default function SplashPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/onboarding");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <S.Container>
            <S.Logo src={Logo} alt="logo" />
        </S.Container>
    );
}
