import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";
import { useNavigate } from "react-router-dom";

export default function RecommendCard() {
    const navigate = useNavigate();

    return (
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendButtonWrapper>
                    <S.Recommend.RecommendButton onClick={() => navigate(`/`)}>{"AI코스가 없습니다. 홈으로 가기"}</S.Recommend.RecommendButton>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    );
}
