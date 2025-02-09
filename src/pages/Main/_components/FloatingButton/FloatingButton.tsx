import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import trip_plan from "../../../../assets/icons/trip_plan.svg";
import usergroup from "../../../../assets/icons/usergroup.svg";
import { useNavigate } from "react-router-dom";

export default function FloatingMenu() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    const handleEditClick = () => {
        navigate("/functional")
    };

    const handleMyClick = () => {
        navigate("/mypage/friend");
        closeMenu();
    };

    return (
        <S.FloatingContainer $isActive={isActive}>
            <S.Overlay $isActive={isActive} onClick={closeMenu} />

            <S.FloatingButtonStyled $isMain $isActive={isActive} onClick={toggleMenu}>
                <img src={Floating} alt="Floating Icon" />
            </S.FloatingButtonStyled>

            <S.SubButton $isActive={isActive} onClick={handleEditClick}>
                <img src={usergroup} alt="usergroup Floating Icon" />
            </S.SubButton>

            <S.SubButton $isActive={isActive} onClick={handleMyClick}>
                <img src={trip_plan} alt="trip_plan Floating Icon" />
            </S.SubButton>
        </S.FloatingContainer>
    );
}
