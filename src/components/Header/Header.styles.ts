import { styled } from "styled-components";

const Header = styled.header`
    position: fixed;
    display:block;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    z-index: 100;
`

const HeaderWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin: 0 20px;
    padding-top:0.75rem;
    padding-bottom:1rem;
    height: 100%;
    gap:1rem;
`

const Left = styled.div`
    gap:1rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
`

const Right = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:1rem;
`





export {
    Header,
    HeaderWrapper,
    Left,
    Center,
    Right
}
