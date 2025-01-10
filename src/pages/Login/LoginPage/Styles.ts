import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background || '#f0f0f0'};
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textColor || '#ffffff'};
    line-height: 1.5;
    font-family: 'Paper Lodgy', sans-serif;
`;

export const Img = styled.img`
    width: 13.75rem; 
    height: 13.75rem;
    margin: 6.25rem auto 0 auto;
`;

