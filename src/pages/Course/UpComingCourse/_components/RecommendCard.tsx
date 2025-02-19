import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";
import { useNavigate, useParams } from "react-router-dom";

export default function RecommendCard() {
    const navigate = useNavigate();
    const { aiCourseId, tripPlanId } = useParams<{ aiCourseId: string; tripPlanId: string }>(); // tripId 가져오기

    return (
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendTitle> {"추천 기능"} </S.Recommend.RecommendTitle>

                <S.Recommend.RecommendButtonWrapper>
                    <S.Recommend.RecommendButton onClick={() => navigate(`/budget/${tripPlanId}/${aiCourseId}`)}>{"AI가 짜준 코스를 바탕으로 예산 짜러 가기"}</S.Recommend.RecommendButton>
                    <S.Recommend.RecommendText onClick={() => navigate("/")}>{"예산 안 짜고 홈으로 가기"}</S.Recommend.RecommendText>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    );
}
