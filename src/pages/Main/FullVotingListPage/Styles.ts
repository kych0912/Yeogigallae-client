import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background || "#0A0A0A"};
    padding: 0 1.25rem;
`;
