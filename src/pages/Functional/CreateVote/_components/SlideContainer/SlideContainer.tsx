import React from "react";
import * as S from "./Styles";

interface ButtonData {
  id: string;
  label: string;
  isActive: boolean; // 버튼 활성화 상태
}

interface SlideContainerProps {
  buttonData: ButtonData[]; // 버튼 데이터 배열
  handleCreateButton: () => void; // CREATE 버튼 클릭 시 호출
  onButtonClick: (id: string) => void; // 버튼 클릭 시 호출
  activeButton: string; // 현재 활성화된 버튼의 ID
}

const SlideContainer: React.FC<SlideContainerProps> = ({
  buttonData,
  handleCreateButton,
  onButtonClick,
  activeButton, // 활성화된 버튼 ID
}) => {
  return (
    <S.StyledCard>
      {/* 각 버튼 렌더링 */}
      {buttonData.map((button, index) => (
        <S.SlideContainer
          key={button.id}
          $isFirst={index === 0} // 첫 번째 버튼 여부
          $isLast={index === buttonData.length - 1} // 마지막 버튼 여부
        >
          <S.Slide
            $active={button.id === activeButton} // 활성화 상태 확인
            $isCreateButton={button.id === "CREATE"} // CREATE 버튼 여부 확인
            onClick={
              button.id === "CREATE"
                ? handleCreateButton // CREATE 버튼 클릭 시 동작
                : () => onButtonClick(button.id) // 일반 버튼 클릭 시 동작
            }
          >
            {/* CREATE 버튼의 아이콘 */}
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
            $active={button.id === activeButton} // 활성화 상태 확인
            $isCreateButton={button.id === "CREATE"} // CREATE 버튼 여부 확인
          >
            {button.label}
          </S.Label>
        </S.SlideContainer>
      ))}
    </S.StyledCard>
  );
};

export default SlideContainer;
