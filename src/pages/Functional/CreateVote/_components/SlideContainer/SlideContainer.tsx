import React from "react";
import * as S from "./Styles";

interface ButtonContainerProps {
  activeButton: string;
  setActiveButton: (id: string) => void;
  handleCreateButton: () => void;
  buttonData: { id: string; label: string }[]; 
}

const SlideContainer: React.FC<ButtonContainerProps> = ({
  activeButton,
  setActiveButton,
  handleCreateButton,
  buttonData, 
}) => {
  return (
    <>
      <S.StyledCard>
        {buttonData.map((button, index) => (
          <S.SlideContainer
            key={button.id}
            $isFirst={index === 0}
            $isLast={index === buttonData.length - 1} 
          >
            <S.Slide
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
            </S.Slide>
            <S.Label
              $active={activeButton === button.id}
              $isCreateButton={button.id === "CREATE"}
            >
              {button.label}
            </S.Label>
          </S.SlideContainer>
        ))}
      </S.StyledCard>
    </>
  );
};

export default SlideContainer;
