import React from "react";
import * as S from "./VoteForm.styles";

const colors = ["#000000", "#888888", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"];

const ColorSelector: React.FC = () => {
  return (
    <S.ColorSelector>
      {colors.map((color) => (
        <S.ColorCircle key={color} color={color} />
      ))}
    </S.ColorSelector>
  );
};

export default ColorSelector;
