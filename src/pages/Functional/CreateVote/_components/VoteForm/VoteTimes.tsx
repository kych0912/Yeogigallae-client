import * as S from "../../../_components/Functional.styles";

export default function VoteTimes({
  selectedTime,
  onTimeChange,
}: {
  selectedTime: string | null;
  onTimeChange: (time: string) => void;
}) {
  const timeOptions = ["30분", "60분", "2시간","4시간", "6시간"];

  return (
    <S.ButtonContainer>
      {timeOptions.map((time) => (
        <S.TimeButton
          key={time}
          $isActive={selectedTime === time}
          onClick={() => onTimeChange(time)}
        >
          {time}
        </S.TimeButton>
      ))}
    </S.ButtonContainer>
  );
}
