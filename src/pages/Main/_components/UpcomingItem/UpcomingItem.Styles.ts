import styled from "styled-components";

export const TravelList = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    gap: 1.125rem;
    padding: 0.875rem;
    width: 23.125rem;
    height: auto;
    flex-shrink: 0;
`;

export const ImageWrapper = styled.div`
    flex: 0 0 auto;
    border-radius: 0.625rem;
    overflow: hidden;
    width: 8.125rem;
    height: 8.125rem;
`;

export const EmptyBox = styled.div`
    width: 100%;
    height: 9.875rem;
    background-color: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.25rem;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 0.5rem 0;
    opacity: 0.8;
`;

export const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.primary};
    gap: 0.156rem;
`;
