import React, { useState } from "react";
import * as S from "../../../_components/Functional.styles";

const VoteTimes: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const timeOptions = ["30분", "60분", "4시간", "6시간"];

  return (
    <S.ButtonContainer>
      {timeOptions.map((time) => (
        <S.TimeButton
          key={time}
          $isActive={selected === time}
          onClick={() => setSelected(time)}
        >
          {time}
        </S.TimeButton>
      ))}
    </S.ButtonContainer>
  );
};

export default VoteTimes;
