import styled from "styled-components";
import Card from "../../../components/Card";

export const BudgetCard = styled(Card)`
    padding-bottom: 0.875rem;
`;

export const Title = styled(Card.Title)`
    text-align: center;
    justify-content: space-between;
`;

export const Text = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: 0.875rem;
    color: white;
`;

export const Logo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;

export const IconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;

    &:hover {
        color: #0056b3;
    }

    svg {
        width: 1.5rem;
        height: 1.5em;
    }
`;
export const CustomWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0;
    margin-top: 0.5rem;
`;
