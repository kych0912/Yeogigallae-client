import { styled } from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: 100;
`;

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.75rem 20px 1rem;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    
    &:nth-child(1) {
        justify-content: flex-start;
    }
    
    &:nth-child(2) {
        justify-content: center;
    }
    
    &:nth-child(3) {
        justify-content: flex-end;
    }
`;

export {
    Header,
    HeaderWrapper,
    Section
};
