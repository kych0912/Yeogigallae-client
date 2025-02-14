import BaseButton from "../../../components/Button/Button";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background || "#f0f0f0"};
    overflow: hidden;
    box-sizing: border-box;
`;

export const Image = styled.img`
    width: 100%;
    margin-bottom: 2.813rem;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Text = styled.div`
    font-size: 1.75rem;
    text-align: center;
    color: white;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    line-height: 1.5;
    margin-bottom: 4.625rem;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.25rem;
`;

export const Button = styled.button`
    padding: 0 2.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.GrayText};
    font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const NextButton = styled(Button)`
    color: ${({ theme }) => theme.colors.primary};
`;

export const LButton = styled(BaseButton)`
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    margin: 0 1.25rem;
`;

export const PaginationContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 5%;
`;

export const Dot = styled.div<{ $active: boolean }>`
    width: ${({ $active }) => ($active ? "20px" : "10px")};
    height: 10px;
    border-radius: 999px;
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.GrayText)};
    transition: width 0.3s ease-in-out;
    align-self: center;
`;
