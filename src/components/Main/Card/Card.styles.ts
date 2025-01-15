import styled from "styled-components";

const Card = styled.div`
    width: 23.125rem;
    background-color: #222222;
    box-shadow: #00000059;
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    padding: 0.875rem;
    align-items: center;
`;

const ItemWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0.375rem;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
    width: 100%;
    gap: 0.5rem;
`;

const Image = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 1.5rem;
`;

const Title = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 2.4rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    width: 100%;
`;

const Label = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: 0.75rem;
    line-height: 1.6rem;
    color: #ffffff;
    width: 100%;
    line-height: 0.875rem;
`;

const Content = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: 1rem;
    color: #ffffff;
    width: 100%;
`;

const Text = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #ffffff;
    width: 100%;
`;
export { Card, Image, Title, Label, CardWrapper, ItemWrapper, Content, Text };
