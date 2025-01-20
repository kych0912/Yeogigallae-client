// 스플래시
import React from "react";
import * as S from "./Styles";
import Logo from "../../../assets/icons/Logo.svg";

const SplashPage: React.FC = () => {
    return (
        <S.Container>
            <S.Logo src={Logo} alt="logo" />
        </S.Container>
    );
};

export default SplashPage;
