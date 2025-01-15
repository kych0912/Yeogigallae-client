import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: ${({ theme }) => theme.fontSize.medium};
    display: flex;
    justify-content: space-between;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 두 개의 열로 변경
    padding: 0.75rem 1.25rem 0rem 1.25rem;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white || "#ffffff"};

    &:nth-child(1) {
        justify-content: flex-start;
    }
    &:nth-child(2) {
        justify-content: flex-end;
    }
`;

export { Header, HeaderWrapper, Section };
