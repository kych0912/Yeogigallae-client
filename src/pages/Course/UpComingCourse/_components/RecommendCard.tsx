import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";

export default function RecommendCard() {

    return(
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendTitle> {"추천 기능"} </S.Recommend.RecommendTitle>

                <S.Recommend.RecommendButtonWrapper>  
                    <S.Recommend.RecommendButton>{"투표 하기"}</S.Recommend.RecommendButton>
                    <S.Recommend.RecommendButton>{"예산 정하기"}</S.Recommend.RecommendButton>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    )
}