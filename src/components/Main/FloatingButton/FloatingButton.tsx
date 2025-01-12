import React, { useState } from "react";
import * as S from "./Styles";

const FloatingMenu: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    return (
        <S.FloatingContainer isActive={isActive}>
            <S.Overlay isActive={isActive} onClick={closeMenu} />

            <S.FloatingButtonStyled isMain isActive={isActive} onClick={toggleMenu}>
                +
            </S.FloatingButtonStyled>

            <S.SubButton isActive={isActive}>1</S.SubButton>
            <S.SubButton isActive={isActive}>2</S.SubButton>
        </S.FloatingContainer>
    );
};

export default FloatingMenu;
