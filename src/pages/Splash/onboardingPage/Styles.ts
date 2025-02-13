import styled, { keyframes } from "styled-components";

const dropBounce = keyframes`
    0% {
        transform: translateY(-400px);
        opacity: 0.3;
    }
    50% {
        transform: translateY(0);
        opacity: 1;
    }
    70% {
        transform: translateY(-50px);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const pulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor || "#0A0A0A"};
`;

export const Logo = styled.img`
    width: auto;
    height: 9rem;
    animation: ${dropBounce} 1s ease-out, ${pulse} 2s infinite 1.5s;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-top: 1rem;
`;
