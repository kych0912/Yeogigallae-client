import * as S from "../../../_components/Vote.styles";
import { useNavigate } from "react-router-dom";
import Card from "../../../../../components/Card";

export default function Recommend() {
  const navigate = useNavigate();
  return (
    <Card>
      <S.ReContent>추천 기능</S.ReContent>
      <S.RecommendButton>
        <S.FixedSizeButton color="primary" size="large" onClick={() => {
          navigate(`/course`);
          }}
        >
          {"AI코스 짜기"}
        </S.FixedSizeButton>
        <S.FixedSizeButton color="primary" size="large" onClick={() => {
          navigate(`/budget`);
          }}
        >
          {"예산 정하기"}
        </S.FixedSizeButton>
      </S.RecommendButton>
    </Card>
  );
};

