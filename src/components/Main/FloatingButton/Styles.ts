import styled, { css } from "styled-components";

export const FloatingContainer = styled.div<{ isActive: boolean }>`
    position: fixed;
    bottom: 2rem; 
    right: 2rem; 
    display: flex;
    flex-direction: column-reverse; 설정
    align-items: center;
    z-index: 1000; 
`;

export const Overlay = styled.div<{ isActive: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
    transition: opacity 0.3s;
    z-index: 999; // 오버레이의 z-index 설정
`;

export const FloatingButtonStyled = styled.button<{ isMain?: boolean; isActive: boolean }>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s, opacity 0.3s;
    z-index: 1001; // 버튼이 오버레이 위로 나타나도록 설정

    ${({ isMain, isActive }) =>
        isMain &&
        css`
            transform: ${isActive ? "rotate(45deg)" : "rotate(0)"};
        `}
`;

export const SubButton = styled(FloatingButtonStyled)<{ isActive: boolean }>`
    margin-bottom: 0.5rem; // 서브 버튼들이 위쪽으로 나타나도록 설정
    opacity: 0;
    pointer-events: none;
    transform: scale(0);
    transition: transform 0.3s, opacity 0.3s;

    ${({ isActive }) =>
        isActive &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: scale(1);
        `}
`;
