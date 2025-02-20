import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background || "#0A0A0A"};
    position: relative; // 추가
`;
export const FloatingContainer = styled.div`
    position: absolute;
    bottom: 1.875rem;
    right: 1.875rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    z-index: 1000;
`;
