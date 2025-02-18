import styled from "styled-components";
import CommonContainer from "../../../../components/Layout/CommonContainer";

export const Container = styled(CommonContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%
`;

export const Title = styled.h1`
    font-size: 24px;
    font-family: ${({theme})=>theme.fontFamily.semiBold};
    font-size:1.5rem;
    color:white;
`;  


