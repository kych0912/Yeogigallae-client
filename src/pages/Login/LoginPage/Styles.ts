import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background || "#f0f0f0"};
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.textColor || "#ffffff"};
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    text-align: center;
`;

export const Img = styled.img`
    width: 13.75rem;
    height: 13.75rem;
    margin: 6.25rem auto 0 auto;
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: #6e6e6e;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    margin-top: 1.25rem;
`;
