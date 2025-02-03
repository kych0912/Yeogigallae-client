import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";

export default function RecommendCard() {
    const navigate = useNavigate(); // ✅ 페이지 이동을 위한 useNavigate 훅 사용

    return (
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendTitle> {"추천 기능"} </S.Recommend.RecommendTitle>

                <S.Recommend.RecommendButtonWrapper>
                    <S.Recommend.RecommendButton onClick={() => navigate("/vote")}>
                        {"투표 하기"}
                    </S.Recommend.RecommendButton>
                    <S.Recommend.RecommendButton onClick={() => navigate("/course/upcoming")}>
                        {"예산 정하기"}
                    </S.Recommend.RecommendButton>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    );
}
