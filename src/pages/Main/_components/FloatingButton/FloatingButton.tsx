import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import trip_plan from "../../../../assets/icons/trip_plan.svg";
import usergroup from "../../../../assets/icons/usergroup.svg";
import { useNavigate } from "react-router-dom";

export default function FloatingMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsVisible(!isVisible);
    const closeMenu = () => setIsVisible(false);

    const handleEditClick = () => {
        navigate("/functional");
        closeMenu();
    };

    const handleMyClick = () => {
        navigate("/mypage/friend");
        closeMenu();
    };

    return (
        <S.FloatingContainer>
            <S.Overlay isVisible={isVisible} onClick={closeMenu} />

            <S.FloatingButtonStyled isMain isVisible={isVisible} onClick={toggleMenu}>
                <img src={Floating} alt="Floating Icon" />
            </S.FloatingButtonStyled>

            <S.MenuItem isVisible={isVisible}>
                <S.SubText isVisible={isVisible}>여행 친구 관리</S.SubText>
                <S.SubButton isVisible={isVisible} onClick={handleMyClick}>
                    <img src={usergroup} alt="trip_plan Floating Icon" />
                </S.SubButton>
            </S.MenuItem>

            <S.MenuItem isVisible={isVisible}>
                <S.SubText isVisible={isVisible}>여행 일정 생성</S.SubText>
                <S.SubButton isVisible={isVisible} onClick={handleEditClick}>
                    <img src={trip_plan} alt="trip_plan Floating Icon" />
                </S.SubButton>
            </S.MenuItem>
        </S.FloatingContainer>
    );
}
