import * as S from "../../_components/Vote.styles";
import Calendar from "../../../../components/Calendar/Calendar";

export default function VoteDate({
  onNext,
}: {
  onNext: () => void; 
}) {
  return (
    <>
      <S.StyledCard>
        <Calendar onComplete={onNext} /> 
      </S.StyledCard>
    </>
  );
}
