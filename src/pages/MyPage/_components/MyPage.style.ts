import styled from "styled-components";

export const AddCircle = styled.div`
    border-radius:50%;
    border:1px solid ${({theme}) => theme.colors.primary};
    width:2.5rem;
    height:2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.colors.primary};
    font-family:${({theme}) => theme.fontFamily.regular};
    font-size:1.5rem;
`