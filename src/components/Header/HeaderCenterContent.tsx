import styled from "styled-components";

export const Typography = styled.div`
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.178rem;
    display:flex;
    align-items:center;
`;

export const Number = styled.div`
    font-size: 1.25rem;
    font-family:${({theme})=>theme.fontFamily.medium};
    color:#434343;
    margin-left:0.375rem;
`;

export default function HeaderCenterContent({title,number}:{title:string,number?:number}){
    return <Typography>
        {title} 
        {number && <Number>{number}</Number>}
    </Typography>
}
