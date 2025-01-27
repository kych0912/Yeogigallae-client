import * as S from "../../../_components/Vote.styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";

export default function ConfirmSuccessCard() {
  const navigate = useNavigate();
  return (
    <S.StyledCard>
      <S.ReContent>추천 기능</S.ReContent>
      <S.RecommendButton>
        <Button color="primary" size="large" onClick={() => {
          navigate(`/course`);
          }}
        >
          {"AI코스 짜기"}
        </Button>
        <Button color="primary" size="large" onClick={() => {
          navigate(`/budget`);
          }}
        >
          {"예산 정하기"}
        </Button>
      </S.RecommendButton>
    </S.StyledCard>
  );
};

