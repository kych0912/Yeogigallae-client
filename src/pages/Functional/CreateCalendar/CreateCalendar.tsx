import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";

export default function CreateCalendar() {
  const handleComplete = () => {
    console.log("날짜가 성공적으로 선택되었습니다!");
  };

  return (
    <S.Container>
      <Calendar onComplete={handleComplete} />
    </S.Container>
  );
};

