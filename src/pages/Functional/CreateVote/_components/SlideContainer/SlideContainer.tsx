import { useState, useEffect } from "react";
import * as S from "./Styles";
import { useTripDetailStore } from "../../../../../store/functionalStore/useTripDetailStore"; 
import { useTripPlanQuery } from "../../../../../react-query/queries/functionalQueries/useTripDetailQuery"; 

interface ButtonData {
  id: string;
  label: string;
  isActive: boolean;
}

interface SlideContainerProps {
  buttonData: ButtonData[]; 
  handleCreateButton: () => void; 
  onButtonClick: (id: string) => void; 
  activeButton: string; 
}

export default function SlideContainer({
  buttonData,
  handleCreateButton,
  onButtonClick,
  activeButton,
}: SlideContainerProps) {
  const { setTripPlanDetails } = useTripDetailStore();
  const [tripPlanId, setTripPlanId] = useState<number | null>(null); // ✅ 상태 추가


  const { data, isSuccess } = useTripPlanQuery(tripPlanId ?? 0); 

  useEffect(() => {
    if (isSuccess && data) {
      console.log("GET 성공:", data); 
      setTripPlanDetails(data);
    }
  }, [isSuccess, data, setTripPlanDetails]);

  const handleButtonClick = (id: string) => {
    onButtonClick(id);

    if (id === "BUTTON2") { 
      setTripPlanId(22); 
      setTripPlanDetails(null);
      setTripPlanId(null); 
    }
  };

  return (
    <S.CustomCard>
      {buttonData.map((button, index) => (
        <S.SlideContainer key={button.id} $isFirst={index === 0} $isLast={index === buttonData.length - 1}>
          <S.Slide
            $active={button.id === activeButton}
            $isCreateButton={button.id === "CREATE"}
            onClick={button.id === "CREATE" ? handleCreateButton : () => handleButtonClick(button.id)}
          >
            {button.id === "CREATE" ? (
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14m7-7H5" stroke="#3b46f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </S.Slide>
          <S.Label $active={button.id === activeButton} $isCreateButton={button.id === "CREATE"}>
            {button.label}
          </S.Label>
        </S.SlideContainer>
      ))}
    </S.CustomCard>
  );
}
