import styled, { css } from "styled-components";

export const FloatingContainer = styled.div<{ $isActive: boolean }>`
    position: fixed;
    bottom: 1.875rem;
    right: 1.875rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    z-index: 1000;
`;

export const Overlay = styled.div<{ $isActive: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
    transition: opacity 0.3s ease-in-out;
    z-index: 999;
`;

export const FloatingButtonStyled = styled.button<{ $isMain?: boolean; $isActive: boolean }>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary || "#fff"};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 1001;

    ${({ $isMain, $isActive }) =>
        $isMain &&
        css`
            transform: ${$isActive ? "rotate(45deg)" : "rotate(0)"};
        `}
`;

export const SubButton = styled(FloatingButtonStyled)<{ $isActive: boolean }>`
    margin-bottom: 0.5rem;
    opacity: 0;
    pointer-events: none;
    transform: scale(0);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    background-color: white;
    ${({ $isActive }) =>
        $isActive &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: scale(1);
        `}
`;

export const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    z-index: 1002;
`;

export const SubText = styled.span<{ $isActive: boolean }>`
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transform: ${({ $isActive }) => ($isActive ? "translateX(0)" : "translateX(10px)")};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    white-space: nowrap;
    color: white;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    z-index: 1003;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
`;
