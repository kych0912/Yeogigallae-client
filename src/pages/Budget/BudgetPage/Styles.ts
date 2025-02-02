import styled from "styled-components";
import CommonContainer from "../../../components/Layout/CommonContainer";

export const Container = styled(CommonContainer)`
    gap: 1rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor || "#333"};
`;

export const Text = styled.h1`
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.GrayText};
    margin-bottom: 3.5rem;
`;
