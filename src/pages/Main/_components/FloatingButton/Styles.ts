import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

const slideUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100%);
        opacity: 0;
    }
`;

export const FloatingContainer = styled.div`
    position: fixed;
    bottom: 1.875rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    z-index: 1000;
`;

export const Overlay = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
    transition: opacity 0.3s ease-in-out;
    z-index: 999;
`;
export const FloatingButtonStyled = styled.button<{ $isMain?: boolean; $isVisible: boolean }>`
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

    ${({ $isMain, $isVisible }) =>
        $isMain &&
        css`
            transform: ${$isVisible ? "rotate(45deg)" : "rotate(0)"};
        `}
`;
export const SubButton = styled(FloatingButtonStyled)<{ $isVisible: boolean }>`
    margin-bottom: 0.5rem;
    background-color: white;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? "scale(1)" : "scale(0)")};
`;
export const MenuItem = styled.div<{ $isVisible: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    animation: ${slideUp} 0.3s ease-out;

    &.hidden {
        animation: ${slideDown} 0.3s ease-in;
    }
    z-index: 1002;
`;

export const SubText = styled.span<{ $isVisible: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? "inline-block" : "none")};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(10px)")};
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
