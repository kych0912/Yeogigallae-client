// 스플래시
import * as S from "./Styles";
import Logo from "../../../assets/icons/Logo.svg";

export default function SplashPage() {
    return (
        <S.Container>
            <S.Logo src={Logo} alt="logo" />
        </S.Container>
    );
}
