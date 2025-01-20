import styled from "styled-components";

export const TravelListItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #222222;
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    width: 24.375rem;
    height: auto;
    flex-shrink: 0;
    margin-bottom: 0.625rem;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 15.625rem;
    overflow: hidden;
    border-radius: 1.25rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoWrapper = styled.div`
    padding: 1.125rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;
