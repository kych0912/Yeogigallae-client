import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import MyFloating from "../../../../assets/icons/MyFloating.svg";
import EditFloating from "../../../../assets/icons/EditFloating.svg";
import { useTripPlanMutation } from "../../../../react-query/mutation/functionalMutation/useTripPlanMutation";
import { useNavigate } from "react-router-dom";
import { mockTripPlanRequest } from "../../../../mocks/tripPlanMock"; 
import { useTripPlanStore } from "../../../../store/functionalStore/useTripPlanStore";

export default function FloatingMenu() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const mutation = useTripPlanMutation();
    const { setTripPlan } = useTripPlanStore(); 

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    const handleEditClick = () => {
        mutation.mutate(
            { tripPlanType: "COURSE", data: mockTripPlanRequest }, 
            {
                onSuccess: (data) => {
                    console.log("POST 성공 데이터:", data);
                    setTripPlan(data); 
                    navigate("/functional"); 
                },
            }
        );
    };

    return (
        <S.FloatingContainer $isActive={isActive}>
            <S.Overlay $isActive={isActive} onClick={closeMenu} />

            <S.FloatingButtonStyled $isMain $isActive={isActive} onClick={toggleMenu}>
                <img src={Floating} alt="Floating Icon" />
            </S.FloatingButtonStyled>

            <S.SubButton $isActive={isActive} onClick={handleEditClick}>
                <img src={EditFloating} alt="Edit Floating Icon" />
            </S.SubButton>
            <S.SubButton $isActive={isActive}>
                <img src={MyFloating} alt="My Floating Icon" />
            </S.SubButton>
        </S.FloatingContainer>
    );
}

