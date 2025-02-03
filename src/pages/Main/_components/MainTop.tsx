import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MyBtn from "../../../assets/icons/MyBtn.svg";
import Alarm from "../../../assets/icons/Alarm.svg";

export default function MainTop() {
    const navigate = useNavigate();

    return (
        <S.TopContainer>
            <S.Title>
                정민님, 오늘은 <br /> 어디 가실래요?
            </S.Title>
            <S.IconContainer>
                <S.CustomIconButton onClick={() => navigate("/notice")}>
                    <img src={Alarm} alt="Alarm Icon" />
                </S.CustomIconButton>
                <S.CustomIconButton onClick={() => navigate("/mypage/profile")}>
                    <img src={MyBtn} alt="MyBtn Icon" />
                </S.CustomIconButton>
            </S.IconContainer>
        </S.TopContainer>
    );
}
