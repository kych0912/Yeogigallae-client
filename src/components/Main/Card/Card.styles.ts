import styled from "styled-components";

const Card = styled.div`
    width: 23.125rem;
    height: auto;
    box-sizing: border-box;
    background-color: #222222;
    box-shadow: #00000059;
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const CardWrapper = styled.div`
    width: 23.125rem;
    height: auto;
    display: flex;
    gap: 1.125rem;
    padding: 1.5rem 1.25rem;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

const ItemWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
    width: 100%;
    gap: 0.5rem;
    padding: 0.125rem 0;
`;

const Title = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: ${({ theme }) => theme.fontSize.large};

    color: #ffffff;
    display: flex;
    align-items: center;
    width: 100%;
`;

const Text = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #ffffff;
    width: 100%;
`;
export { Card, Title, CardWrapper, ItemWrapper, Text };
