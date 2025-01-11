import React from "react";
import * as S from "./CompleteButton.styles";
import { Button } from "../Button";

const CompleteButton: React.FC = () => {
  return (
    <S.Footer>
      <Button size="large">{"완료"}</Button>
    </S.Footer>
  );
};

export default CompleteButton;
