import styled from "styled-components";

export const Container = styled.div`
  margin:1rem 1.25rem;
`

export const CompleteMessage = styled.div`
    color:#434343;
    text-align:center;
    font-size:0.875rem;
    font-family:${({theme})=>theme.fontFamily.regular};
    line-height:1.125rem;
    margin-top:0.75rem;
`
