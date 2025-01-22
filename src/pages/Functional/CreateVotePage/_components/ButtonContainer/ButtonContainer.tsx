import React from "react";
import * as S from "./Styles";

interface ButtonContainerProps {
  activeButton: string;
  setActiveButton: (id: string) => void;
  handleCreateButton: () => void;
  buttonData: { id: string; label: string }[]; 
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  activeButton,
  setActiveButton,
  handleCreateButton,
  buttonData, 
}) => {
  return (
    <S.ButtonContainer>
      {buttonData.map((button) => (
        <S.ButtonWrapper key={button.id}>
          <S.Button
            $active={button.id !== "CREATE" && activeButton === button.id}
            $isCreateButton={button.id === "CREATE"}
            onClick={
              button.id === "CREATE"
                ? handleCreateButton
                : () => setActiveButton(button.id)
            }
          >
            {button.id === "CREATE" ? (
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m7-7H5"
                  stroke="#3b46f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </S.Button>
          <S.ButtonLabel 
            $active={activeButton === button.id}
            $isCreateButton={button.id === "CREATE"} 
          >
            {button.label}
          </S.ButtonLabel>
        </S.ButtonWrapper>
      ))}
    </S.ButtonContainer>
  );
};

export default ButtonContainer;
