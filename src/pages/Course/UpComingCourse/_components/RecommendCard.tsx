import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";

export default function RecommendCard() {

    return(
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendTitle> {"추천 기능"} </S.Recommend.RecommendTitle>

                <S.Recommend.RecommendButtonWrapper>  
                    <S.Recommend.RecommendButton>   코스 추천 받기   </S.Recommend.RecommendButton>
                    <S.Recommend.RecommendButton>   코스 추천 받기   </S.Recommend.RecommendButton>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    )
}