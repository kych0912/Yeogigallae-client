import * as S from "./Main.Styles";
import MyBtn from "../../../assets/icons/MyBtn.svg";
import Alarm from "../../../assets/icons/Alarm.svg";

export default function MainTop() {
    return (
        <S.TopContainer>
            <S.Title>
                정민님, 오늘은 <br /> 어디 가실래요?
            </S.Title>
            <S.IconContainer>
                <S.CustomIconButton>
                    <img src={Alarm} alt="Alarm Icon" />
                </S.CustomIconButton>
                <S.CustomIconButton>
                    <img src={MyBtn} alt="MyBtn Icon" />
                </S.CustomIconButton>
            </S.IconContainer>
        </S.TopContainer>
    );
}
