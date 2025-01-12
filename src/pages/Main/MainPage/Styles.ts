import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column; // 세로 정렬 추가
    justify-content: center;
    align-items: center;
    height: auto;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor || "#333"};
`;
