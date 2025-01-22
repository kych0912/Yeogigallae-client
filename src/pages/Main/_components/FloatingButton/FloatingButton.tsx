import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import MyFloating from "../../../../assets/icons/MyFloating.svg";
import EditFloating from "../../../../assets/icons/EditFloating.svg";

export default function FloatingMenu() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    return (
        <S.FloatingContainer $isActive={isActive}>
            <S.Overlay $isActive={isActive} onClick={closeMenu} />

            <S.FloatingButtonStyled $isMain $isActive={isActive} onClick={toggleMenu}>
                <img src={Floating} alt="Floating Icon" />
            </S.FloatingButtonStyled>

            <S.SubButton $isActive={isActive}>
                <img src={EditFloating} alt="Edit Floating Icon" />
            </S.SubButton>
            <S.SubButton $isActive={isActive}>
                <img src={MyFloating} alt="My Floating Icon" />
            </S.SubButton>
        </S.FloatingContainer>
    );
}
