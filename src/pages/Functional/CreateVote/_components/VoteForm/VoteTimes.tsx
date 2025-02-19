import { useEffect, useRef, useState, forwardRef } from "react";
import { Controller, Control } from "react-hook-form";
import * as S from "../../../_components/Functional.styles";
import SkeletonForm from "./Skeleton/SkeletonForm";

interface VoteTimesProps {
  control: Control<any>;
}

const VoteTimes = forwardRef<HTMLDivElement, VoteTimesProps>(({ control }, ref) => {
  const voteTimeMapping: Record<string, string> = {
    "THIRTY_MINUTES": "30분",
    "SIXTY_MINUTES": "60분",
    "TWO_HOURS": "2시간",
    "FOUR_HOURS": "4시간",
    "SIX_HOURS": "6시간",
  };

  const [showToast, setShowToast] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const timeOptions = Object.values(voteTimeMapping);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div ref={ref}>
      <Controller
        name="voteLimitTime"
        control={control}
        render={({ field }) => {
          useEffect(() => {
            if (isInitialLoad) {
              setIsInitialLoad(false);
              return;
            }
            setShowToast(!field.value);
          }, [field.value]);

          return (
            <>
              <S.ButtonContainer ref={containerRef}>
                {timeOptions.map((time) => {
                  const key = Object.keys(voteTimeMapping).find(
                    (k) => voteTimeMapping[k] === time
                  );

                  return (
                    <SkeletonForm key={key || time} buttonwidth>
                      <S.TimeButton
                        $isActive={field.value === key}
                        onClick={() => {
                          if (key) {
                            field.onChange(field.value === key ? "" : key);
                          }
                        }}
                      >
                        {time}
                      </S.TimeButton>
                    </SkeletonForm>
                  );
                })}
              </S.ButtonContainer>

              {showToast && <S.StyledToast>투표 제한 시간을 설정해주세요!</S.StyledToast>}
            </>
          );
        }}
      />
    </div>
  );
});

VoteTimes.displayName = "VoteTimes";
export default VoteTimes;
