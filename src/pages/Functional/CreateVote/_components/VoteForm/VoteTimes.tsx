import { useEffect, useRef } from "react";
import * as S from "../../../_components/Functional.styles";
import SkeletonForm from "./Skeleton/SkeletonForm";

interface VoteTimesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function VoteTimes({ value, onChange }: VoteTimesProps) {
  const voteTimeMapping: Record<string, string> = {
    "THIRTY_MINUTES": "30분",
    "SIXTY_MINUTES": "60분",
    "TWO_HOURS": "2시간",
    "FOUR_HOURS": "4시간",
    "SIX_HOURS": "6시간",
  };

  const selectedTime = voteTimeMapping[value] || "";
  const timeOptions = Object.values(voteTimeMapping);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <S.ButtonContainer ref={containerRef}>
      {timeOptions.map((time) => {
        const selectedKey = Object.keys(voteTimeMapping).find(
          (key) => voteTimeMapping[key] === time
        );

        return (
          <SkeletonForm key={selectedKey || time} buttonwidth>
            <S.TimeButton
              $isActive={selectedTime === time}
              onClick={() => {
                if (selectedKey) onChange(selectedKey);
              }}
            >
              {time}
            </S.TimeButton>
          </SkeletonForm>
        );
      })}
    </S.ButtonContainer>
  );
}
