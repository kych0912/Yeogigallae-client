import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MyBtn from "../../../assets/icons/MyBtn.svg";
import Alarm from "../../../assets/icons/Alarm.svg";
import { useAuthStore } from "../../../pages/Login/useAuthStore";
import { useGetNotice } from "../../../react-query/queries/main/notice/queries";
import { useNotice } from "../../../hooks/useNotice";

export default function MainTop() {
    const navigate = useNavigate();
    const { nickname } = useAuthStore();
    const { hasNotification } = useNotice();

    // 알림 정보 가져오기
    const { data: notice, isLoading: isNoticeLoading, error: noticeError } = useGetNotice();

    console.log(notice?.map((item)=>item.id));

    const isHasNotification = hasNotification(notice ?? []);

    // 로딩 및 에러 처리
    if (isNoticeLoading) {
        // 로딩 상태 처리 (콘솔 로그 등 필요 시 추가)
    }

    if (noticeError) {
        console.error("Error loading notice:", noticeError);
    }

    return (
        <S.TopContainer>
            <S.Title>
                {nickname}님, 오늘은 <br /> 어디 가실래요?
            </S.Title>

            <S.IconContainer>
                <S.CustomIconButton onClick={() => navigate("/notice")} style={{ position: "relative" }}>
                    <img src={Alarm} alt="Alarm Icon" />
                    {isHasNotification && <S.NotificationDot />}
                </S.CustomIconButton>
                <S.CustomIconButton onClick={() => navigate("/mypage/profile")}>
                    <img src={MyBtn} alt="MyBtn Icon" />
                </S.CustomIconButton>
            </S.IconContainer>
        </S.TopContainer>
    );
}
