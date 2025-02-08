import styled from "styled-components";

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 88px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({theme})=>theme.colors.background};
`

interface CommonContainerProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    className?:string;
    onClick?:()=>void;
}

export default function CommonContainer({children,className,onClick}:CommonContainerProps){
    return <Container onClick={onClick} className={className}>{children}</Container>
}

