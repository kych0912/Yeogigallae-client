import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import MyFloating from "../../../../assets/icons/MyFloating.svg";
import EditFloating from "../../../../assets/icons/EditFloating.svg";
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
                <img src={EditFloating} alt="Edit Floating Icon" />
            </S.SubButton>

            <S.SubButton $isActive={isActive} onClick={handleMyClick}>
                <img src={MyFloating} alt="My Floating Icon" />
            </S.SubButton>
        </S.FloatingContainer>
    );
}
