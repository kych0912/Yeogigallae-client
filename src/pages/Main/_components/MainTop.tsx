import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MyBtn from "../../../assets/icons/MyBtn.svg";
import Alarm from "../../../assets/icons/Alarm.svg";
import { useGetUser } from "../../../react-query/queries/user/queries";

export default function MainTop() {
    const { data: user, isLoading, error } = useGetUser();

    // 로딩 상태일 때
    if (isLoading) {
        console.log("Loading user...");
    }

    // 에러 발생 시
    if (error) {
        console.error("Error loading user", error);
    }

    const navigate = useNavigate();
    const hasNotification = true; // 알람 존재 여부 상태 (테스트용)

    return (
        <S.TopContainer>
            <S.Title>
                {user?.username}님, 오늘은 <br /> 어디 가실래요?
            </S.Title>

            <S.IconContainer>
                <S.CustomIconButton onClick={() => navigate("/notice")} style={{ position: "relative" }}>
                    <img src={Alarm} alt="Alarm Icon" />
                    {hasNotification && <S.NotificationDot />}
                </S.CustomIconButton>
                <S.CustomIconButton onClick={() => navigate("/mypage/profile")}>
                    <img src={MyBtn} alt="MyBtn Icon" />
                </S.CustomIconButton>
            </S.IconContainer>
        </S.TopContainer>
    );
}
