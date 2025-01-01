import styled from "styled-components";

const Card = styled.div`
    width:100%;
    height:100%;
    background-color:#222222;
    box-shadow: #00000059;
    border-radius:30px;
`

const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.125rem;
    margin:0.875rem; 
    align-items:center;

`;

const ItemWrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding: 0 0.375rem;
    align-items:center;
    box-sizing: border-box;
    width:100%;
`;

const Image = styled.div`
    width:100%;
    height:250px;
    border-radius:1.5rem;
`

const Title = styled.div`
    font-weight:600;
    font-size:1.5rem;
    line-height:2.4rem;
    color:#FFFFFF;
    display:flex;
    align-items:center;
    width:100%;
`

const Label = styled.div`
    font-weight:500;
    font-size:0.75rem;
    line-height:1.6rem;
    color:#FFFFFF;
    width:100%;
`

const Content = styled.div`
    font-weight:500;
    font-size:1rem;
    line-height:1.6rem;
    color:#FFFFFF;
    margin-top:0.5rem;
    width:100%;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #eee;
`;

export {
    Card,
    Image,
    Title,
    Label,
    Content,
    CardWrapper,
    Divider,
    ItemWrapper
}
